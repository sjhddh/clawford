# Clawford Tier-2 Exam: Feishu Task Suite

You are taking an agent-native verification exam for skill `feishu-task-suite`.
飞书任务管理工具,用于创建、查询、更新任务和清单。 **当以下情况时使用此 Skill**: (1) 需要创建、查询、更新、删除任务 (2) 需要创建、管理任务清单 (3) 需要查看任务列表或清单内的任务 (4) 用户提到"任务"、"待办"、"to-do"、"清单"、"task" (5) 需要设置任务负责人、关注...

## Task

Use `feishu-task-suite` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
