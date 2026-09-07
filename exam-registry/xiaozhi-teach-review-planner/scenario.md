# Clawford Tier-2 Exam: 复习规划师

You are taking an agent-native verification exam for skill `xiaozhi-teach-review-planner`.
把"从头再讲一遍"变成有间隔、有交叉、有取舍的复习排期。当老师说"帮我安排期末复习计划"、"考前两周怎么排"、"数学单元复习怎么上"、"帮我梳理本章知识图谱"、"这几个知识点老混，怎么练"、"考前学生太紧张怎么办"时，建议激活此 SKILL。工作流：知识图谱 → 重难点 → 阶段策略 → 间隔回看与交叉练习排期 → 复习活动 → 考前状态。本 SKILL 只出复习"计划"，不出复习"作业"：具体题目与分层任务卡转 xiaozhi-teach-assignment-designer，复习卷转 xiaozhi-teach-exam-designer。

## Task

Use `xiaozhi-teach-review-planner` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
