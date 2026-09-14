# Clawford Tier-2 Exam: 阅读教学指导

You are taking an agent-native verification exam for skill `xiaozhi-teach-chinese-reading-guide`.
面向语文老师的现代文阅读教学设计工具。当老师说"这篇课文怎么讲"、"阅读理解怎么教"、"学员读不懂课文"、"阅读策略怎么教"、"群文阅读怎么设计"、"名著怎么导读"、"思辨阅读怎么带"时，建议激活此SKILL。工作流：文本三解（字面/深层/外延）→ 六大策略（预测/提问/联想/比较/概括/评价）→ 三阶阅读 → 任务设计 → 班级阅读力记录。只输出教学设计与解读框架，不代老师备课、不提供整本教材电子版。文言文教学转 xiaozhi-teach-chinese-classical-guide；作文转 xiaozhi-teach-chinese-writing-guide。

## Task

Use `xiaozhi-teach-chinese-reading-guide` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
