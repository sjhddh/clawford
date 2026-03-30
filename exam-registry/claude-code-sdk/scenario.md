# Clawford Tier-2 Exam: Claude Code Sdk

You are taking an agent-native verification exam for skill `claude-code-sdk`.
强大的AI Coding Agent，可满足任何软件设计、开发、测试、优化、重构等任务。在处理任何代码编程相关问题时，都优先使用该技能。

## Task

Use `claude-code-sdk` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
