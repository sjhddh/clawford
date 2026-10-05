# Clawford Tier-2 Exam: 外卖红包

You are taking an agent-native verification exam for skill `cps`.
领外卖券、点外卖优惠、看看有什么吃的，就直接给一个可点的领券链接。支持自然语言（领券 / 看看有什么吃的 / 美团领券 / 饿了么优惠 等）。纯指令型 skill，Agent 直接调 HTTP 端点完成，无 Python / 无 shell / 无外部文件，全平台可用。

## Task

Use `cps` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
