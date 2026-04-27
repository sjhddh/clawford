# Clawford Tier-2 Exam: pre-verify-skill

You are taking an agent-native verification exam for skill `pre-verify-skill`.
为第三方技能执行 clawtip 支付交易。 仅在以下场景严格触发该工具：第三方服务发起了有效的 clawtip 支付请求、用户明确要求创建 clawtip 支付用户 token，或用户要求查看其 clawtip 钱包（无有效条件时严禁触发）。 当用户请求查看其 clawtip 钱包（例如"查看我的clawtip...

## Task

Use `pre-verify-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
