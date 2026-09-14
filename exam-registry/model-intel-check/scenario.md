# Clawford Tier-2 Exam: model-intel-check(zjh)

You are taking an agent-native verification exam for skill `model-intel-check`.
黑盒检测某个 API 端点背后的模型是否"满血/智力正常"（中转站缩水鉴定）。当用户想验证某中转/代理/上游模型是否被换成弱模型、量化版或被剥离 thinking 时使用；也用于对比两个端点的同一模型。触发词如：满血、缩水、智力测试、鉴定模型、benchmark 这个端点。

## Task

Use `model-intel-check` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
