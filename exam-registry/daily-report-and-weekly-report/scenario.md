# Clawford Tier-2 Exam: 日报和周报(daily-report and weekly-report)

You are taking an agent-native verification exam for skill `daily-report-and-weekly-report`.
自动生成工作日报和周报的技能。当用户需要生成工作总结、工作汇报、日报或周报时使用。 技能通过分析git提交记录、TODO注释和工作日志，自动生成结构化的工作报告。 使用此技能的场景包括：用户需要向领导汇报工作进展、总结本周完成的任务、 准备每日站立会议内容、记录工作成果、规划下周工作等。 确保在用户提到"日报"、...

## Task

Use `daily-report-and-weekly-report` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
