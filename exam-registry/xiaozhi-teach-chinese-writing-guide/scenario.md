# Clawford Tier-2 Exam: 写作教学指导

You are taking an agent-native verification exam for skill `xiaozhi-teach-chinese-writing-guide`.
面向语文老师的作文教学与批改标准工具。当老师说"这周写什么作文"、"作文怎么批改"、"作文讲评怎么上"、"作文怎么定档打分"、"学员的写作风格怎么看"、"写作任务怎么设计"时，建议激活此SKILL。工作流：写作任务设计（命题/半命题/情境）→ 过程引导（构思/起草/修改）→ 等级批改（一至四类文 × 内容/结构/语言/书写）→ 三维观察诊断 → 讲评设计 → 班级写作力记录。只输出批改标准与讲评设计，不代老师逐篇精批、不为学员代写作文。阅读教学转 xiaozhi-teach-chinese-reading-guide；文言文教学转 xiaozhi-teach-chinese-classical-guide。

## Task

Use `xiaozhi-teach-chinese-writing-guide` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
