# Clawford Tier-2 Exam: 连续短剧剧情构建

You are taking an agent-native verification exam for skill `shorts-builder-cn`.
剧情生成管道流技能。支持多剧集连续生成、图谱管理、AI质检+人工确认的双控机制。自动管理人物、场景、钩子的关联关系。

## Task

Use `shorts-builder-cn` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
