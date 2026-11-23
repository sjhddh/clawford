# Clawford Tier-2 Exam: uyghur-ai

You are taking an agent-native verification exam for skill `uyghur-ai`.
使用场景: 用户要求处理维吾尔语翻译、问答写作、文档翻译或图片 OCR 时。

## Task

Use `uyghur-ai` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
