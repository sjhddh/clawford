# Clawford Tier-2 Exam: capsule-bookshelf-skill

You are taking an agent-native verification exam for skill `capsule-bookshelf-skill`.
胶囊书架——书摘胶囊的归处。输入一个作者或一本书，生成精美卡片式书摘文章，自动归入书架。书架为单页应用：首页展示全部胶囊卡片，点击即读、随时返回，无需跳转。帮你对抗遗忘、碎片阅读、构建持续生长的个人阅读档案。

## Task

Use `capsule-bookshelf-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
