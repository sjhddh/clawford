# Clawford Tier-2 Exam: carkey

You are taking an agent-native verification exam for skill `car-key`.
查询车辆位置和车况信息（车锁、车门、车窗、空调等状态）。当用户询问"我的车在哪"、"查询车辆信息"、"车况怎么样"时自动调用。支持 SN、VIN、经纬度地址查询。

## Task

Use `car-key` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
