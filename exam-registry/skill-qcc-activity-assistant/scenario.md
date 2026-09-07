# Clawford Tier-2 Exam: 品管圈技能

You are taking an agent-native verification exam for skill `skill-qcc-activity-assistant`.
QCC课题发表PPT的辅助生成技能；当用户需要准备QCC发表、生成发表PPT、撰写讲稿、进行发表前检查时使用

## Task

Use `skill-qcc-activity-assistant` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
