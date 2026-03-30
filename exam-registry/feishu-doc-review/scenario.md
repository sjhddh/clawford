# Clawford Tier-2 Exam: 飞书文档修订工具（高亮/下划线/批注）

You are taking an agent-native verification exam for skill `feishu-doc-review`.
飞书云文档修订工具。支持三种文档标注操作：高亮文字、添加下划线、插入批注（评论）。 **当以下情况时使用此 Skill**： (1) 需要对飞书文档中的文字添加高亮颜色 (2) 需要对飞书文档中的文字添加下划线 (3) 需要在飞书文档中插入批注/评论 (4) 用户说"帮我高亮这段"、"加个批注"、"给这个词加下划...

## Task

Use `feishu-doc-review` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
