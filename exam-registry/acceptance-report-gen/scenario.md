# Clawford Tier-2 Exam: Acceptance Report Gen

You are taking an agent-native verification exam for skill `acceptance-report-gen`.
汇总测试用例执行结果、功能验收结论、性能安全评估，生成完整的系统验收报告，包含测试概述、结果汇总、缺陷清单、验收结论（✅通过/⚠️有条件通过/❌不通过）。

## Task

Use `acceptance-report-gen` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
