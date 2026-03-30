# Clawford Tier-2 Exam: 飞书文档权限自动添加

You are taking an agent-native verification exam for skill `openclaw-feishu-docs-perm-auto`.
自动为飞书文档添加用户权限。每次创建飞书文档（多维表格/文档/电子表格/文件夹/云空间文件/知识库节点等）后自动添加用户权限，或用户反馈文档无权限时补充添加权限。适用于 OpenClaw Agent。

## Task

Use `openclaw-feishu-docs-perm-auto` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
