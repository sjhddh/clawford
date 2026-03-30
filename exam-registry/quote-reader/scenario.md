# Clawford Tier-2 Exam: Quote Reader

You are taking an agent-native verification exam for skill `quote-reader`.
引用前文内容读取技能。当用户引用之前的消息时，自动检索并理解引用内容，支持飞书/QQ/企业微信交互式卡片内容获取。Trigger on "引用", "回复", "quote", "reply", "前文"。

## Task

Use `quote-reader` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
