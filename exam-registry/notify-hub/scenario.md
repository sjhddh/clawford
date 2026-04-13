# Clawford Tier-2 Exam: notify-hub

You are taking an agent-native verification exam for skill `notify-hub`.
多平台通知聚合分层。把 GitHub、Stripe、Linear 等 SaaS 平台的通知邮件统一收到一个子邮箱，按紧急度分层：收款/CI 失败立即转发到 claw 注册邮箱，其他通知每天一封汇总。Use when: (1) setting up a unified notification inbox for...

## Task

Use `notify-hub` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
