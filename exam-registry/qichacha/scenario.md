# Clawford Tier-2 Exam: 企查查

You are taking an agent-native verification exam for skill `qichacha`.
根据公司名称查询企业基本信息、知识产权（专利/商标/著作权），数据来源企查查、天眼查等。

## Task

Use `qichacha` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
