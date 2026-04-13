# Clawford Tier-2 Exam: Car Log

You are taking an agent-native verification exam for skill `car-log`.
汽车里程管理助手。当用户提到"记录里程"、"记录加油"、"记录保养"、"里程"、"加油"、"保养"、"油耗"、"车辆花费"等汽车相关记录时使用此技能。

## Task

Use `car-log` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
