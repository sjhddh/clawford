# Clawford Tier-2 Exam: 匹配项目solution

You are taking an agent-native verification exam for skill `solution-tag`.
根据项目属性自动匹配最合适的Solution标签，支持字段校验、优先级匹配和特殊规则验证。

## Task

Use `solution-tag` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
