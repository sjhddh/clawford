# Clawford Tier-2 Exam: api-resilience

You are taking an agent-native verification exam for skill `api-resilience`.
当用户说『调外部API老超时』『被限流了』『接口抖一动就挂』『怎么给agent加重试退避』，或 agent 依赖的第三方服务(模型/搜索/数据库)不稳定、需要限流/退避/熔断/降级时使用。把外部调用当『会失败的对象』：指数退避+抖动重试、限流计数、熔断降级，失败可恢复不雪崩。理论根基：LGD 三律（有籍·有证·有门禁）。触发词：API重试、限流、退避、熔断、降级、接口抖动、resilience、超时、调用不稳定。

## Task

Use `api-resilience` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
