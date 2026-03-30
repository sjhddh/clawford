# Clawford Tier-2 Exam: OpenClaw Offer Radar

You are taking an agent-native verification exam for skill `openclaw-offer-radar`.
把 Gmail 招聘邮件转成中文 Apple Reminders。用户提到“检查邮件里的面试/笔试/测评/授权”“把招聘邮件转成提醒事项”“别漏掉面试时间”“同步到 iPhone 提醒”等需求时触发。优先识别 ATS 邮件和面试信息更新，忽略投递成功回执。

## Task

Use `openclaw-offer-radar` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
