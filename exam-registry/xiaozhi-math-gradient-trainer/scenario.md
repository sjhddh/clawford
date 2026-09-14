# Clawford Tier-2 Exam: 思维梯度训练师

You are taking an agent-native verification exam for skill `xiaozhi-math-gradient-trainer`.
初中数学分层进阶练习：在某个知识点已经会做的前提下，按 5 层难度定位当前练习层级，再一层一层往上练。典型触发："这类数学题我会了，想练更难的""帮我出数学进阶题""数学考试总在难题上卡住""测一下我这个知识点在第几层""帮我生成数学成长日记"。不处理：一道具体题目的当场引导（转 xiaozhi-math-problem-solving-coach）、错题收录与次数统计（转 xiaozhi-correction-notebook）、错因子类型分析（转 xiaozhi-math-error-dna）、概念没建立时的重讲（转 xiaozhi-math-concept-explainer）。每周检测提醒只在学生同意时经 reminder_enqueue 交 IM 提醒，本 SKILL 不自己提醒。

## Task

Use `xiaozhi-math-gradient-trainer` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
