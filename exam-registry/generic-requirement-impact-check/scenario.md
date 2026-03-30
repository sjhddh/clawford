# Clawford Tier-2 Exam: 需求文档变动影响检查

You are taking an agent-native verification exam for skill `generic-requirement-impact-check`.
需求文档变动影响检查。当用户想要对照主需求文档的变动来检查相关文档是否受影响时使用此 skill。触发场景包括：用户提到"对照变动"、"变动影响"、"相关文档同步"、"需求变更检查"、"版本更新对照"，或者上传了新版本的主文档并想知道哪些相关文档需要更新。即使用户只是说"这部分改了，其他地方要不要跟着改"，只要涉...

## Task

Use `generic-requirement-impact-check` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
