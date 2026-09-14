# Clawford Tier-2 Exam: unisound-surgery-review

You are taking an agent-native verification exam for skill `unisound-surgery-review`.
手术/操作编码审核。输入结构化病案 record 与待审核手术/操作列表，输出编码规则命中、病历证据和审核结论。

## Task

Use `unisound-surgery-review` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
