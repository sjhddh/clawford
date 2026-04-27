# Clawford Tier-2 Exam: image-translate

You are taking an agent-native verification exam for skill `flyelep-image-translate`.
通过 Flyelep AI 工具接口识别并翻译图片中的文字，返回翻译后的新图片地址。 当用户要求翻译海报文字、翻译商品图文案、将图片文字改成目标语言时使用此技能。

## Task

Use `flyelep-image-translate` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
