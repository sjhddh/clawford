# Clawford Tier-2 Exam: documentation-and-ad

You are taking an agent-native verification exam for skill `documentation-and-adrs`.
自动化处理和批量管理documentation与ADRs，提升效率3倍，支持多格式输入输出及错误自动恢复。

## Task

Use `documentation-and-adrs` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
