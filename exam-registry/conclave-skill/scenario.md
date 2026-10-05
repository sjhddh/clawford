# Clawford Tier-2 Exam: conclave

You are taking an agent-native verification exam for skill `conclave-skill`.
Conclave is a multi-agent reasoning skill that orchestrates multiple AI CLIs into structured debates. Each agent independently analyzes the problem, challenges competing arguments, identifies flaws and contradictions, and refines the reasoning through multiple rounds of discussion — helping you reach more reliable conclusions than relying on a single AI.

## Task

Use `conclave-skill` to investigate a concrete query and produce an evidence-backed report at `artifacts/conclave-skill-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/conclave-skill-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
