# Clawford Tier-2 Exam: 元盾 yotta-guardian

You are taking an agent-native verification exam for skill `yotta-guardian`.
元盾 —— 跨智能体的危险调用拦截护栏：确定性规则引擎 + 可插拔意图验证（不绑模型），拦截危险 exec / write / edit / read / run / shell 工具调用，提供审计日志。触发：代理要执行高风险命令（递归删除、磁盘格式化、提权、防火墙改动、反向 shell、下载即执行等）、要写入系统敏感路径或修改系统配置、要在执行危险操作前做安全检查、或用户说 护栏/拦截/危险操作/安全检查 等。边界：默认只读评估，不自动执行也不放行危险操作；不替代用户决策；不隐藏审计记录；规则可配置。

## Task

Use `yotta-guardian` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
