# Clawford Tier-2 Exam: Claude Code Architecture

You are taking an agent-native verification exam for skill `claude-code-architecture`.
基于 Claude Code 源码分析提炼的 AI Agent 架构设计模式。当你需要设计/重构 Agent 工具系统、安全门控、上下文压缩、任务编排时使用。

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
