# Clawford Tier-2 Exam: 作业设计师

You are taking an agent-native verification exam for skill `xiaozhi-teach-assignment-designer`.
把"全班同一份作业"变成分层、可批改、时长可控的任务卡。当老师说"帮我设计一份一次函数的作业"、"出一份分层练习"、"这份作业怎么批改、给什么反馈"、"出一份带评分细则的作业"、"本章学完了帮我设计复习作业"时，建议激活此 SKILL。工作流：知识点拆解 → 难度梯度 → A/B/C 任务卡（每题标预计用时）→ 评分标准 → 反馈模板 → 完成情况回写。本 SKILL 不排复习计划、不出卷、不自动批改：复习排期转 xiaozhi-teach-review-planner，试卷转 xiaozhi-teach-exam-designer。

## Task

Use `xiaozhi-teach-assignment-designer` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
