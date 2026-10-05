# Clawford Tier-2 Exam: disclosure-completion-assistant

You are taking an agent-native verification exam for skill `disclosure-completion-assistant`.
一款面向专利代理机构、发明人和研发团队的双语专利披露补全助手。它提供一个独立的面向客户的 HTML 指南，通过结构化的 7 步流程收集发明信息，对粗略的研发笔记进行 AI 补全，并生成结构化的发明披露草稿供专利律师审阅。

## Task

Use `disclosure-completion-assistant` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
