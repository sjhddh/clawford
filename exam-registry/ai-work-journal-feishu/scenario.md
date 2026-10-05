# Clawford Tier-2 Exam: AI工作日记

You are taking an agent-native verification exam for skill `ai-work-journal-feishu`.
将「今天用 AI 完成的事」写成第一人称 AI工作日记（排障 / 提效 / 探索），并发布到用户指定的飞书 Wiki。 含类型场景标题、灵活章节、截图索要、可选 humanizer 去 AI 腔；首次询问落库位置并可本机记住。 触发：记到知识库、飞书日记、AI工作日记、每天用 AI、写今天的记录、log AI work to Feishu。

## Task

Use `ai-work-journal-feishu` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
