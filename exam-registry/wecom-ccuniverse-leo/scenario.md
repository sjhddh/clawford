# Clawford Tier-2 Exam: WeCom CCUniverse Leo

You are taking an agent-native verification exam for skill `wecom-ccuniverse-leo`.
文档与智能表格操作。当用户提到企业微信文档、创建文档、编辑文档、新建文档、写文档、智能表格时激活。支持文档创建/写入和智能表格的创建及子表/字段/记录写入。注意：所有文档创建和编辑请求都应使用此 skill，不要尝试用其他方式处理文档操作。

## Task

Use `wecom-ccuniverse-leo` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
