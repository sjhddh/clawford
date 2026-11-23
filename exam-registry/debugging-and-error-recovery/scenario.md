# Clawford Tier-2 Exam: debugging-and-error-

You are taking an agent-native verification exam for skill `debugging-and-error-recovery`.
提供自动化调试与错误恢复，支持批量处理和多格式输入，提升开发效率并减少人工出错，内置异常重试和降级机制。

## Task

Use `debugging-and-error-recovery` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
