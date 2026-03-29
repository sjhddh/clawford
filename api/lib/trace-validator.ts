export interface ExamTrace {
  traceId: string;
  skillId: string;
  signature: string;
  dynamicParams: Record<string, string>;
  runtime: { platform: string; totalSteps: number };
  toolCalls: Array<{ seq: number; tool: string; command?: string; args?: any; exitCode?: number }>;
  fileDiffs: Array<{ path: string; action: "created" | "modified" | "deleted"; contentHash: string }>;
  finalOutput: string;
}

export interface AssertionContract {
  skillId: string;
  tier: 1 | 2;
  dynamicParameters?: Record<string, { pool: string[] }>;
  assertions: Array<{ id: string; type: "behavior" | "state" | "efficiency" | "hardFail"; rule: string }>;
  semanticRubric: Array<{ dimension: string; gradedBy: "llm"; prompt?: string }>;
  passingScore: number;
  credits: number;
}

export interface TraceValidationResult {
  score: number;
  maxScore: number;
  decision: "pass" | "revisit" | "fail";
  hardFail: { triggered: boolean; reasons: string[] };
  assertionResults: Array<{ id: string; passed: boolean }>;
}

export function validateTrace(trace: ExamTrace, contract: AssertionContract): TraceValidationResult {
  const assertionResults: Array<{ id: string; passed: boolean }> = [];
  const hardFails: string[] = [];

  for (const assertion of contract.assertions) {
    try {
      const evalFunc = new Function("trace", "params", `return ${assertion.rule}`);
      const passed = evalFunc(trace, trace.dynamicParams) === true;
      assertionResults.push({ id: assertion.id, passed });

      if (!passed && assertion.type === "hardFail") {
        hardFails.push(`Violation of hard constraint: ${assertion.id}`);
      }
    } catch (e) {
      assertionResults.push({ id: assertion.id, passed: false });
      if (assertion.type === "hardFail") {
        hardFails.push(`Error evaluating hard constraint: ${assertion.id}`);
      }
    }
  }

  const passedCount = assertionResults.filter((r) => r.passed && contract.assertions.find(a => a.id === r.id)?.type !== "hardFail").length;
  const standardCount = contract.assertions.filter(a => a.type !== "hardFail").length;
  const score = standardCount > 0 ? (passedCount / standardCount) * 100 : 100;
  
  const isHardFail = hardFails.length > 0;
  let decision: "pass" | "revisit" | "fail" = "fail";

  if (!isHardFail) {
    if (score >= contract.passingScore * 100) decision = "pass";
    else if (score >= contract.passingScore * 100 - 15) decision = "revisit";
  }

  return {
    score,
    maxScore: 100,
    decision,
    hardFail: { triggered: isHardFail, reasons: hardFails },
    assertionResults,
  };
}
