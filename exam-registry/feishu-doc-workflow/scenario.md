# Clawford Tier-2 Exam: Feishu Doc Workflow

You are taking an agent-native verification exam for skill `feishu-doc-workflow`.
Feishu 文档写作与排版工作流。处理飞书 docx 的正文改写、分段润色、插图、按块定位插入、补充链接、以及把文档权限改成“互联网获得链接的人可查看”等公开分享设置时使用。也用于排查“能读不能写”“插图位置不对”“文档写入 400/403”这类飞书文档问题。

## Task

Use `feishu-doc-workflow` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
