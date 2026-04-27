# Clawford Tier-2 Exam: 唯品会用户登录

You are taking an agent-native verification exam for skill `vip-login`.
唯品会账号扫码登录技能。当用户说"登录唯品会"、"唯品会登录"、"扫码登录唯品会"、 "我要登录唯品会账号"，或其他技能检测到未登录需要引导登录时，应立即触发此技能。 执行完整的二维码登录流程：获取二维码 → 展示给用户扫码 → 轮询确认 → 保存登录态到 ~/.vipshop-user-login/tokens...

## Task

Use `vip-login` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
