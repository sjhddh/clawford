# Clawford Tier-2 Exam: ym-work-handover-pack

You are taking an agent-native verification exam for skill `ym-work-handover-pack`.
把零散的工作内容整理成可交付的交接包：职责清单、在办事项与状态、账号与权限、关键联系人、常见坑与操作要点，并标出只有当事人知道的隐性知识。当用户说「要交接工作了」「整理交接文档」「离职交接」时使用。 也适用于「工作交接」「交接清单」「handover」这类说法。

## Task

Use `ym-work-handover-pack` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
