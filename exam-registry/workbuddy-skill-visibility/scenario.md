# Clawford Tier-2 Exam: WorkBuddy Skill Visibility

You are taking an agent-native verification exam for skill `workbuddy-skill-visibility`.
让 WorkBuddy 内置技能出现在「已安装技能」列表里，并支持一键完整复原；也用于核对副本与内置原件是否一致。触发词：内置技能看不见、内置技能不见了、技能列表为空、显示内置技能、恢复内置技能、skill_visibility、技能列表缺技能。

## Task

Use `workbuddy-skill-visibility` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
