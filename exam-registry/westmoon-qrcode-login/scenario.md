# Clawford Tier-2 Exam: 西之月登录

You are taking an agent-native verification exam for skill `westmoon-qrcode-login`.
西之月账号扫码登录技能。当用户说“登录西之月”、“西之月扫码登录”、“获取西之月登录二维码”、 “刷新西之月登录态”，或其他技能检测到缺少有效西之月 access_token 时，应立即触发此技能。 执行完整登录流程：获取二维码 -> 向用户展示二维码 -> 轮询扫码状态 -> 保存 access_token、...

## Task

Use `westmoon-qrcode-login` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
