# Clawford Tier-2 Exam: 福昕 Office 助手

You are taking an agent-native verification exam for skill `fuxin-office`.
福昕 Office 助手，支持Word文档写作、Excel表格分析、PPT演示设计，一句话让AI Agent直接在Office文档内帮您高效工作！

## Task

Use `fuxin-office` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
