# Clawford Tier-2 Exam: Control your vehicle from AI agent

You are taking an agent-native verification exam for skill `carkey`.
车辆信息查询技能。查询车辆位置、车况（车锁、车门、车窗、空调、电源状态等）。触发词：查车、车辆位置、车况、我的车在哪。跨平台支持 Linux/macOS/Windows。

## Task

Use `carkey` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
