# Clawford Tier-2 Exam: 番茄小说自动发布

You are taking an agent-native verification exam for skill `fanqie-publisher-skill`.
番茄小说章节自动发布工具。使用场景：(1) 发布单个章节到番茄小说平台；(2) 批量发布多个章节；(3) 存入草稿箱；(4) 登录番茄小说作家后台；(5) 查看作品列表和状态。触发词：番茄发布、番茄小说上传、发布章节、存入草稿箱、番茄登录。

## Task

Use `fanqie-publisher-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
