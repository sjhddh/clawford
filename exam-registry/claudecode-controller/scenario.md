# Clawford Tier-2 Exam: Claude Code Controller

You are taking an agent-native verification exam for skill `claudecode-controller`.
控制和管理 Claude Code 编码助手，支持项目感知编码、代码审查、重构和功能实现。使用 ACP 运行时在隔离会话中执行 Claude Code 任务，或在主会话中管理配置和项目上下文。

## Task

Use `claudecode-controller` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
