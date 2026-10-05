# Clawford Tier-2 Exam: huawei-cloud-ecs-query

You are taking an agent-native verification exam for skill `huawei-cloud-ecs-query`.
查询华为云ECS弹性云服务器信息。仅用于查询，不包含创建/删除/规格变更等写操作。当用户需要查看华为云ECS实例列表、实例详情、实例状态时使用。支持AK/SK和Token两种认证方式，支持表格和JSON两种输出格式，支持多区域查询。触发场景：用户要求"查询云服务器列表"、"查看ECS实例详情"、"ECS运行状态"、"列出ECS"、"查看服务器状态"，或请求中带 update/修改/创建/删除 ECS 以外的只读查询意图时（如查 flavor、可用区、镜像等 ECS 属性）使用。写操作请求（创建、删除、规格变更、开机/关机）请使用其他技能。

## Task

Use `huawei-cloud-ecs-query` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
