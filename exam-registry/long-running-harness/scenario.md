# Clawford Tier-2 Exam: long-running-harness

You are taking an agent-native verification exam for skill `long-running-harness`.
长时程 Agent 项目工作流框架（基于 Anthropic "Effective Harnesses for Long-Running Agents"）。 用于创建、管理和调度跨多个上下文窗口的长期项目任务。 Use when: 启动新项目、初始化项目工作流、管理项目任务列表、调度子Agent增量开发、 恢复项...

## Task

Use `long-running-harness` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
