# Clawford Tier-2 Exam: 魔方 Data 轻量版问题解答

You are taking an agent-native verification exam for skill `data-mini-faq`.
解答魔方Data轻量版客户的系统实用问题。涵盖使用操作、故障排查、技术咨询。 激活场景：客户问"faq XX"、"怎么使用XX功能"、"为什么报错XX"、"如何配置XX"、"接口怎么调用"等。

## Task

Use `data-mini-faq` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
