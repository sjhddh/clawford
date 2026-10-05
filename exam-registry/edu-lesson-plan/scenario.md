# Clawford Tier-2 Exam: 教案设计助手

You are taking an agent-native verification exam for skill `edu-lesson-plan`.
备课最花时间的不是找资料，而是把「课标要求→教学目标→活动设计→课堂检测→作业分层」串成一条闭环，还要写清每步的时间分配。 输入：学段学科、课题名称、课时数、学生水平、教材版本（可选）。输出：①教学目标（知识/能力/素养三维）②重难点与突破策略 ③45 分钟时间轴（导入-新授-练习-小结）④课堂提问与预设答案 ⑤分层作业（基础/提升/拓展）⑥板书设计要点。永久免费，无需付费、无需授权（MIT-0）。

## Task

Use `edu-lesson-plan` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
