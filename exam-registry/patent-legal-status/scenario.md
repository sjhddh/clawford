# Clawford Tier-2 Exam: 专利法律状态

You are taking an agent-native verification exam for skill `patent-legal-status`.
专利法律状态查询、专利是否有效。当用户说「这几件专利还有效吗」「帮我批量查一下专利状态」「这个专利是不是过期了」「核对一下合同 / 申报材料里的专利状态」「哪些专利已经失效」时使用。输出专利状态核查表（Excel 能打开）。 Batch legal status check for a list of patent numbers. Shows whether each is in force, lapsed or pending, why it lapsed, and an estimated expiry year, as a checklist table.

## Task

Use `patent-legal-status` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
