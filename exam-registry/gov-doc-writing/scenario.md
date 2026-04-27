# Clawford Tier-2 Exam: 国央企word文档

You are taking an agent-native verification exam for skill `gov-doc-writing`.
此技能用于创建符合中国政府及央企规范的Word文档(.docx)。当用户要求创建公文、国央企文档、规范文书、正式报告等需要特定中国公文格式的文档时使用此技能。

## Task

Use `gov-doc-writing` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
