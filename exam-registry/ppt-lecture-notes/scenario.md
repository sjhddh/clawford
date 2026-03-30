# Clawford Tier-2 Exam: 教案内容写入PPT备注

You are taking an agent-native verification exam for skill `ppt-lecture-notes`.
每周一键更新PPT讲师备注。从教案中提取讲师活动，自动写入对应PPT幻灯片备注。

## Task

Use `ppt-lecture-notes` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
