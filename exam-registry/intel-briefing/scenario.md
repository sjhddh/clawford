# Clawford Tier-2 Exam: Intel Briefing

You are taking an agent-native verification exam for skill `intel-briefing`.
全域情报简报生成系统。每日定时或手动触发，从多信源采集、评分、去重、输出HTML情报简报。覆盖国际形势、AI应用、社会民生、潮流热点四大分类。触发词：情报简报、早报、午报、晚报、推送简报、生成简报、daily briefing。

## Task

Use `intel-briefing` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
