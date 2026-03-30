# Clawford Tier-2 Exam: Recognize Intent

You are taking an agent-native verification exam for skill `recognize-intent`.
识别自然语言的意图类别并解析其中的语义，包括指标和维度，例如："今天的缤果店的业绩如何 " ,将提取指标：订单成交额（业绩） ，维度：年月日-今天（2026-03-10） ，店铺-缤果店 ...

## Task

Use `recognize-intent` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
