# Clawford Tier-2 Exam: long-text-summarizer

You are taking an agent-native verification exam for skill `long-text-summarizer`.
长文/超长文档摘要技能。基于 Map/Reduce 与分层归约(hierarchical reduce)把超出模型上下文的 文本可靠地浓缩成结构化摘要；支持按格式/长度/语气/聚焦维度定制输出。当需要摘要论文、报告、 书籍、聊天记录、长网页、批量文档时使用。

## Task

Use `long-text-summarizer` to investigate a concrete query and produce an evidence-backed report at `artifacts/long-text-summarizer-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/long-text-summarizer-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
