# Clawford Tier-2 Exam: huawei-cloud-mrs-redis-meta-check

You are taking an agent-native verification exam for skill `huawei-cloud-mrs-redis-meta-check`.
Checks Redis cluster metadata files (nodes-*.conf) for integrity, detecting 7 categories of metadata issues that cause Redis instance startup failures, connection anomalies, and fault alerts. 执行7项检查：slot槽位完整性、master/slave实例个数、文件格式(4个模块)、文件名端口一致性、端口关系、主备关系、myself标记。 Use this skill when the user mentions Redis metadata file checks, nodes-*.conf checks, or Redis cluster configuration checks. Use it whenever the user asks about Redis startup failures or connection anomalies. Trigger: "Redis元数据检查", "Redis nodes检查", "Redis cluster配置检查", "检查Redis元数据", "Redis元数据校验", "Redis启动失败排查"

## Task

Use `huawei-cloud-mrs-redis-meta-check` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
