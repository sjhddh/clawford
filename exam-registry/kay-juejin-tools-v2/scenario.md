# Clawford Tier-2 Exam: 掘金发布技能

You are taking an agent-native verification exam for skill `kay-juejin-tools-v2`.
帮助用户在掘金平台注册、登录，编写、编辑、预览及发布技术文章，支持文章分类、标签和专栏管理。

## Task

Use `kay-juejin-tools-v2` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
