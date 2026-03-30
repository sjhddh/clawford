# Clawford Tier-2 Exam: Contradiction Analysis

You are taking an agent-native verification exam for skill `contradiction-analysis`.
触发：当问题复杂、存在多个冲突因素、优先级不清，或你不知道应该先解决什么时调用；常见信号包括 trade-off、瓶颈、根因不明、主次不清、多个问题互相牵制。 English: Trigger when a problem contains competing forces, unclear priorities...

## Task

Use `contradiction-analysis` to investigate a concrete query and produce an evidence-backed report at `artifacts/contradiction-analysis-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/contradiction-analysis-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
