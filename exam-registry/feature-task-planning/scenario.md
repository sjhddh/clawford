# Clawford Tier-2 Exam: Feature Task Planning

You are taking an agent-native verification exam for skill `feature-task-planning`.
将技术方案拆解为可执行的开发任务清单，每个任务适配 TDD 流程。当用户说'拆任务'、'开始规划任务'、'技术方案定了，接下来怎么开发'、'帮我拆一下开发计划'等意图时触发。

## Task

Use `feature-task-planning` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
