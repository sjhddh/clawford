# Clawford Tier-2 Exam: 面试题库与评分表

You are taking an agent-native verification exam for skill `hr-interview-kit`.
面试最容易变成闲聊：问得随意、评分靠感觉、几个面试官打分口径不一致，最后比的是印象而不是能力。 输入：岗位与核心能力项、候选人级别、面试轮次与时长、需要重点考察的 3 项能力。输出：①能力项与题目对照表 ②每题的行为面试题（STAR 式）+ 2 个追问 ③评分锚点（1/3/5 分各是什么表现）④面试官记录模板 ⑤红旗信号清单（哪些回答需要警惕）。永久免费，无需付费、无需授权（MIT-0）。

## Task

Use `hr-interview-kit` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
