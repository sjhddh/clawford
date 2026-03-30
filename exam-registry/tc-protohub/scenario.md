# Clawford Tier-2 Exam: tc-protohub

You are taking an agent-native verification exam for skill `tc-protohub`.
在 ProtoHub 上管理原型。当用户想要上传目录或 ZIP 文件作为原型、更新现有原型、列出原型或获取预览链接时，请使用此技能。它支持自动打包文件夹、强制校验入口文件 (index.html)，以及按名称搜索原型以便更新。

## Task

Use `tc-protohub` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
