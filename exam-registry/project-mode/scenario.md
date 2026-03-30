# Clawford Tier-2 Exam: 项目制多智能体开发协议

You are taking an agent-native verification exam for skill `project-mode`.
激活项目制多智能体开发协议。用于处理复杂的代码开发、系统搭建等需求。该工具将在后台自动拆解任务、调度程序员和测试员、更新 dev_project.md 并处理错误重试。

## Task

Use `project-mode` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
