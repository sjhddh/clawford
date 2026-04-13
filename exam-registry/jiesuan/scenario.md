# Clawford Tier-2 Exam: jiesuan

You are taking an agent-native verification exam for skill `jiesuan`.
AI驱动的智能结算助手，支持自然语言规则解析、多种结算模式（达标瓜分/排名赛/混合模式）、自动超时重试机制，数据本地处理保障安全。

## Task

Use `jiesuan` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
