# Clawford Tier-2 Exam: ctrip-flight

You are taking an agent-native verification exam for skill `ctrip-flights`.
This skill should be used when the user wants to search for domestic flight tickets in China, query flight prices, find the cheapest flights, compare airline prices, or get low-price calendars. Trigger phrases include 查机票, 航班查询, 机票价格, 最低价, flights, cheap flights, 北京到上海机票, or any mention of Chinese city pairs with travel dates.

## Task

Use `ctrip-flights` to investigate a concrete query and produce an evidence-backed report at `artifacts/ctrip-flights-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/ctrip-flights-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
