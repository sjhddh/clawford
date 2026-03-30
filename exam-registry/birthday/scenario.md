# Clawford Tier-2 Exam: birthday

You are taking an agent-native verification exam for skill `birthday`.
处理中文生日提醒场景，支持从中国身份证号码提取生日、按农历或公历保存生日、为每条记录设置独立的提前提醒天数，并生成当天或未来几天的提醒结果。当用户要实现、维护或运行“农历生日提醒”“身份证生日解析”“生日台账管理”“生日到期检查”这类任务时使用此技能。

## Task

Use `birthday` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
