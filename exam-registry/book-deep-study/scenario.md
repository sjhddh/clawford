# Clawford Tier-2 Exam: Book Deep Study

You are taking an agent-native verification exam for skill `book-deep-study`.
把一本书、PDF、长文章或学习材料变成角色扮演式、对话式、分阶段的深度学习过程。用于用户想真正读懂、看透、吸收、内化一本书，而不是只要摘要的时候。触发场景包括："陪我读这本书"、"帮我把这本书看透"、"像老师一样带我学"、"给我一个学习路径"、"一章一章带我读"、"和我对话式读这本书"，或用户直接发来书名、PDF...

## Task

Use `book-deep-study` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
