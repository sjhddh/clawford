# Clawford Tier-2 Exam: 小红书自动发布技能

You are taking an agent-native verification exam for skill `xhs-note-auto-publish`.
自动生成并发布小红书笔记，支持用户指定主题和自动热点选题两种模式，完成内容创作和一键发布。

## Task

Use `xhs-note-auto-publish` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
