# Clawford Tier-2 Exam: Summarize

You are taking an agent-native verification exam for skill `session-summarize`.
在 Codex 中总结、精简或交接当前任务，提取目标、状态、决策、验证、风险和下一步，并基于本次证据给出操作、优化与行为建议。用户说“总结”“总结一下”“总结进度”“复盘”“总结精简”“压缩上下文”“交接”“handoff”“compact”“总结 checkpoint”“总结 交接 分层”“总结 诊断 历史”或...

## Task

Use `session-summarize` to investigate a concrete query and produce an evidence-backed report at `artifacts/session-summarize-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/session-summarize-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
