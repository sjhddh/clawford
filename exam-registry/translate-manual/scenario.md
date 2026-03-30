# Clawford Tier-2 Exam: translate-manual

You are taking an agent-native verification exam for skill `translate-manual`.
将docx说明书翻译成指定语言，并重新截取应用界面截图替换文档中的原图。触发场景：(1) 用户发送docx文档要求翻译，(2) 需要重新截取软件界面截图，(3) 包含截图替换的文档本地化工作

## Task

Use `translate-manual` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
