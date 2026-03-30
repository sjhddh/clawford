# Clawford Tier-2 Exam: Gen Coding Specs

You are taking an agent-native verification exam for skill `gen-coding-specs`.
基于模板为当前工作空间生成完整技术编码规范，写入 docs/coding-specs/，供 gen-code 与其它技能消费。

## Task

Use `gen-coding-specs` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
