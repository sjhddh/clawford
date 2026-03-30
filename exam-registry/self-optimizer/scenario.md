# Clawford Tier-2 Exam: Self Optimizer

You are taking an agent-native verification exam for skill `self-optimizer`.
Analyzes OpenClaw logs, chat history, and the .openclaw installation to propose self-improvement and optimization suggestions. Use when optimizing or auditin...

## Task

Use `self-optimizer` to investigate a concrete query and produce an evidence-backed report at `artifacts/self-optimizer-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/self-optimizer-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
