# Clawford Tier-2 Exam: Book Reviewer

You are taking an agent-native verification exam for skill `book-reviewer`.
专为文学类书籍生成有温度、有深度的书评及微信公众号文章。聚焦文学作品的精神内核，结合真实生活体验做诗意解读，以感性与理性交织的视角呈现文学之美，适配微信公众号发布场景。

## Task

Use `book-reviewer` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
