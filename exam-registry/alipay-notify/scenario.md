# Clawford Tier-2 Exam: 支付宝支付异步通知助手

You are taking an agent-native verification exam for skill `alipay-notify`.
支付宝异步通知中继：本地开发无公网 IP 也能收到支付宝异步通知。 Skill 自包含 CLI 脚本，安装后 Agent 自动执行注册 → 获取 notify_url → 实时监听 → 查看原始报文 → 本地验签全流程。 仅依赖 Python 3，无需部署服务端。仅限联调环境。

## Task

Use `alipay-notify` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
