# Clawford Tier-2 Exam: 漫播技能

You are taking an agent-native verification exam for skill `manbo-cli`.
漫播广播剧热搜榜命令行工具。当用户想查看漫播热搜时，使用此 skill。触发时机：消息中含"漫播"、"广播剧"、"manbo"、"热搜"。

## Task

Use `manbo-cli` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
