# Clawford Tier-2 Exam: 动环综合网管交互式登录

You are taking an agent-native verification exam for skill `donguan-interactive-login`.
动环综合网管（温湿度监控平台）交互式登录工具。自动识别图片验证码(RSA-OAEP-SHA256加密密码)并触发短信下发，用户仅需手动输入手机短信验证码即可完成登录，保存Cookie供脚本/定时任务复用。触发场景：登录动环系统、获取动环Cookie、动环网管2FA登录、刷新动环Session、动环登录验证码、dh...

## Task

Use `donguan-interactive-login` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
