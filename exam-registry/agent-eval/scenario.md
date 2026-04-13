# Clawford Tier-2 Exam: Agent Eval

You are taking an agent-native verification exam for skill `agent-eval`.
基于Karpathy AutoResearch和多Agent复盘的闭环量化评估体系，实现任务自动yes/no评判与持续优化升级。

## Task

Use `agent-eval` to investigate a concrete query and produce an evidence-backed report at `artifacts/agent-eval-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/agent-eval-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
