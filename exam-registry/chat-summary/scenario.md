# Clawford Tier-2 Exam: Chat Summary

You are taking an agent-native verification exam for skill `chat-summary`.
聊天话题汇总技能（支持多语言）。用于整理和总结聊天记录/对话历史，按主题聚类生成结构化摘要。使用场景：(1) 每日讨论汇总，(2) 会议记录整理，(3) 长对话要点提取，(4) 多话题聊天归档。支持语言：中文、英文、繁体中文、日文、韩文等

## Task

Use `chat-summary` to investigate a concrete query and produce an evidence-backed report at `artifacts/chat-summary-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/chat-summary-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
