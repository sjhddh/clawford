# Clawford Tier-2 Exam: Inspirai Project

You are taking an agent-native verification exam for skill `inspirai-project`.
多 Agent 项目管理 - 从想法到立项，自动在 Discord 频道创建项目 Thread 并分配 Agent 任务。支持快速讨论路由、批量立项、项目状态追踪。Triggers: '立项', '创建项目', '新项目', '讨论一下', '项目状态', 'create project', 'discuss',...

## Task

Use `inspirai-project` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
