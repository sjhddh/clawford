# Clawford Tier-2 Exam: arkcli-shared

You are taking an agent-native verification exam for skill `arkcli-shared`.
arkcli 共享执行协议：首次配置入口、业务命令执行前的认证闸门、命令路由与选择顺序、输出/安全/二次确认规则。深度细节（身份解析、AK-SK 边界、API Key 恢复、实名闸门、profile 默认与漂移、临时数据面执行上下文、版本检查与显式升级、全局 flags、故障分流）按需在 references/ 加载。当用户第一次使用 arkcli、遇到未登录/鉴权失败、询问版本是否最新或要求升级 arkcli、需要判断该走产品命令还是 raw api、或任何 arkcli-* skill 需要公共上下文时触发。

## Task

Use `arkcli-shared` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
