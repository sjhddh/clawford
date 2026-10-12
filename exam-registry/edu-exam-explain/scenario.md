# Clawford Tier-2 Exam: 错题解析与讲评稿

You are taking an agent-native verification exam for skill `edu-exam-explain`.
学生错的往往不是题，而是某个前置概念。老师讲评时要同时讲清「为什么错」「正确思路」「换个条件还会不会」，手写讲评稿很费时间。 输入：题目原文或截图描述、正确答案、学生典型错误答案、学段学科。输出：①错误归因表（概念/审题/计算/表达四类）②正确解法的分步拆解 ③前置知识补丁清单 ④2 道同类变式题（含答案）⑤一句话学习建议。永久免费，无需付费、无需授权（MIT-0）。

## Task

Use `edu-exam-explain` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
