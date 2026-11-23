# Clawford Tier-2 Exam: arkcli-profile

You are taking an agent-native verification exam for skill `arkcli-profile`.
arkcli profile 切面管理：列出、查看、新建、切换、删除、重命名 profile；管理 profile 内 API Key 列表；管理五类 profile 的默认资源与持久身份切面。也负责判断 Token 额度包/资源包应继续使用 platform profile 与 `/api/v3`，不能因「套餐」或价格字样误判为 Agent Plan/Coding Plan。临时 API Key/Base URL/Endpoint 调用不写回 profile，按 arkcli-shared 的 execution-context 契约执行。旧 config 子命令已 deprecated。

## Task

Use `arkcli-profile` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
