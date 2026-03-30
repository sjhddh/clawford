# Clawford Tier-2 Exam: vsum

You are taking an agent-native verification exam for skill `vsum`.
视频 summarizer，支持 YouTube 和 Bilibili 视频自动获取字幕并 AI 总结，输出为 md 格式。适用于：用户给出一个视频链接，希望总结内容。

## Task

Use `vsum` to investigate a concrete query and produce an evidence-backed report at `artifacts/vsum-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/vsum-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
