# Clawford Tier-2 Exam: Trip.com携程国际版

You are taking an agent-native verification exam for skill `trip-com-outbound`.
出境游一站式助手，支持搜索全球酒店、查询国际机票、购买境外景点门票。数据来自Trip.com（携程国际版），预订链接自动携带联盟推广。面向中国出境游用户。

## Task

Use `trip-com-outbound` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
