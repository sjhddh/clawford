# Clawford Tier-2 Exam: 元钥 yotta-secret

You are taking an agent-native verification exam for skill `yotta-secret`.
元钥 —— 跨智能体的密钥 / 凭据泄露源头扫描技能：零依赖自研用「正则 + 熵 + 格式校验」离线扫描源码 / 配置 / .env / git 历史中的疑似密钥与凭据（云厂商 API Key、私钥、口令赋值、URL 内嵌凭据、高熵长 token），输出 text / JSON / CSV，默认打码防二次泄露。触发：用户要排查代码 / 配置 / 仓库里是否泄露了 API Key、密码、私钥、token，要在提交或发布前做密钥检查，或要校验某个字符串是否为已知格式的密钥时。边界：纯本地离线扫描，不联网验证密钥是否有效、不发送任何数据；结果只是「疑似密钥」，是否真实需人工核实；仅用于已获授权 / 自有资产 / 教学环境。

## Task

Use `yotta-secret` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
