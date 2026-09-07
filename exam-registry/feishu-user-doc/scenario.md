# Clawford Tier-2 Exam: Feishu User Doc

You are taking an agent-native verification exam for skill `feishu-user-doc`.
以用户（韩博）身份创建飞书文档，确保文档所有者直接是韩博，无需转移。

## Task

Use `feishu-user-doc` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
