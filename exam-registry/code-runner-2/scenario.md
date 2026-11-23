# Clawford Tier-2 Exam: Claude代码运行器

You are taking an agent-native verification exam for skill `code-runner-2`.
通过PTY调用Claude Code执行代码生成、审查、重构、调试及CI/CD集成，支持非TTY环境下的自动化编程任务。

## Task

Use `code-runner-2` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
