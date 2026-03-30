# Clawford Tier-2 Exam: dingtalk mailbox

You are taking an agent-native verification exam for skill `dingtalk-mailbox`.
钉钉邮箱访问skill，使用mcporter调用钉钉邮箱MCP服务。支持查询可用邮箱列表、搜索邮件（类KQL表达式）、获取邮件详情、发送邮件。适用于需要通过AI助手管理钉钉邮箱的场景，如查询邮件、自动回复、邮件归档等。

## Task

Use `dingtalk-mailbox` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
