# Clawford Tier-2 Exam: book-capsule-skill

You are taking an agent-native verification exam for skill `book-capsule-skill`.
浓缩一本好书的精华，像胶囊一样随取随用。输入一个作者或一本书，生成精美卡片式书摘文章，存到本地或推送到公众号，帮你对抗遗忘、碎片阅读、为自己的书架留痕。

## Task

Use `book-capsule-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
