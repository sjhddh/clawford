# Clawford Tier-2 Exam: ccfrank

You are taking an agent-native verification exam for skill `ccfrank`.
查询会议/期刊的 CCF 等级。当用户提到 CCF 等级、论文评级、会议排名、期刊等级，或需要查询某个会议/期刊是 CCF-A/B/C 时使用此技能。支持通过会议简称（如 PLDI、ICSE）、全称、或 DBLP URL 查询。

## Task

Use `ccfrank` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
