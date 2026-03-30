# Clawford Tier-2 Exam: 住宿顾问

You are taking an agent-native verification exam for skill `travel-accommodation-advisor`.
围绕已知地标通过 POI 锚定和半径筛选查找并对比附近酒店。适用于用户明确景点、商圈、交通枢纽或会展中心，并希望按距离与质量排序获得可预订住宿。

## Task

Use `travel-accommodation-advisor` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
