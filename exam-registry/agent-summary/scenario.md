# Clawford Tier-2 Exam: Agent Summary

You are taking an agent-native verification exam for skill `agent-summary`.
Agent进度摘要系统，定期检查子Agent状态并生成简短进度报告。参考Claude Code的AgentSummary机制，每30秒对子Agent生成3-5词状态摘要。

## Task

Use `agent-summary` to investigate a concrete query and produce an evidence-backed report at `artifacts/agent-summary-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/agent-summary-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
