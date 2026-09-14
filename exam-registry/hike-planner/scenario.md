# Clawford Tier-2 Exam: Hike Planner

You are taking an agent-native verification exam for skill `hike-planner`.
一站式徒步出行规划。根据用户明确指令生成行程计划（含徒步路线/交通/住宿/人文/装备）。支持查询票务/酒店信息，不执行订票/下单/候补/支付。多源交叉验证（12306/两步路/高德/小红书/GPX/KML文件）。行程状态持久化到本地文件，编辑命令自动写入，短信解析需用户确认。

## Task

Use `hike-planner` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
