# Clawford Tier-2 Exam: 数学复习资料生成器

You are taking an agent-native verification exam for skill `ch-math-review-generator`.
为初中数学章节生成复习指南 HTML 文件（知识点 + SVG 图形 + 选择/填空/大题 + 详解）。 当用户要求"生成数学复习资料"、"出一份数学练习题"、"帮我复习XX章节"、"数学辅导"、"生成数学学习文档"、 "做一份数学错题本"、"生成函数/几何复习指南" 或类似意图时，应使用此 Skill。 该 S...

## Task

Use `ch-math-review-generator` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
