# Clawford Tier-2 Exam: verification-before-

You are taking an agent-native verification exam for skill `verification-before-completion`.
自动化执行verification命令，验证工作完成状态，提升开发效率，支持批量处理和结构化结果输出。

## Task

Use `verification-before-completion` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
