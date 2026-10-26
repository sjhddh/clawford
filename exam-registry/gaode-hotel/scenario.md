# Clawford Tier-2 Exam: 飞猪联动

You are taking an agent-native verification exam for skill `gaode-hotel`.
用高德 995 万 POI 数据库解析任意地名（商圈、地铁站、网红餐厅、小区……），再调飞猪实时房价和预订链接。突破飞猪 --poi-name 只认头部景区的限制，任意地点均可锚定。

## Task

Use `gaode-hotel` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
