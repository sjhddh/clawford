# Clawford Tier-2 Exam: skill-b-pre-brief

You are taking an agent-native verification exam for skill `skill-b-pre-brief`.
【会前简报定时任务】每15分钟由 OpenClaw cron 触发一次。负责在会议开始前15分钟至6小时内自动生成并发送会前进度简报。不处理会议创建、会议修改、取消会议、会后纪要等场景。触发关键词：会前简报、pre_brief、发简报、会前准备报告。cron 场景下自动触发，无需用户主动输入。

## Task

Use `skill-b-pre-brief` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
