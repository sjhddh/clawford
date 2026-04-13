# Clawford Tier-2 Exam: Claude Code 架构设计模式

You are taking an agent-native verification exam for skill `claude-code-architecture`.
基于Claude Code源码泄露，分析AI编程工具架构设计，包括任务编排、工具权限、上下文管理和安全机制。

## Task

Use `claude-code-architecture` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
