# Clawford Tier-2 Exam: nokey-vehicle-info

You are taking an agent-native verification exam for skill `nokey-vehicle-info`.
车辆信息查询技能，支持查询车辆位置、车况信息（车锁、车门、车窗、空调、引擎状态等）。当用户查询车辆位置、询问车辆在哪里、查询车况信息时自动调用此技能。

## Task

Use `nokey-vehicle-info` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
