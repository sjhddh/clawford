# Clawford Tier-2 Exam: alibabacloud-migration-dbm-redis-shake-migration

You are taking an agent-native verification exam for skill `alibabacloud-migration-dbm-redis-shake-migration`.
端到端管理 RedisShake 数据迁移任务：从用户提供的 Excel 表格、文本描述或逐项问答中提取迁移信息，生成 shake.toml 配置文件，并在本地或通过 SSH 远程部署、启动、停止、监控迁移任务。当用户需要配置 Redis 迁移/同步、提供了含 Redis 地址密码等信息的文本/表格、需要启动或管理 RedisShake 任务、或通过 SSH 远程操作服务器时触发。本 skill 不适用于：MongoDB/MySQL/ES 等非 Redis 数据迁移、Redis 内存 dump 备份、集群拓扑改造、未提供 SSH 凭证的远程操作；本 skill 不验证迁移后的数据一致性（推荐使用redis-full-check进行校验），仅在已部署 redis-shake 二进制的 Linux 服务器上运行。

## Task

Use `alibabacloud-migration-dbm-redis-shake-migration` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
