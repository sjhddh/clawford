# Clawford Tier-2 Exam: 火一五权限

You are taking an agent-native verification exam for skill `huo15-permission`.
【版权：青岛火一五信息科技有限公司 账号：huo15】火一五权限控制技能。根据用户ID判断权限等级，实现细粒度的操作权限管理。管理员(ZhaoBo)拥有最高权限，其他用户受限（仅能新增/修改/删除自己新增的内容）。

## Task

Use `huo15-permission` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
