# Clawford Tier-2 Exam: 九号数据展示

You are taking an agent-native verification exam for skill `ninebot-show-skill`.
Read-only Ninebot/九号 electric vehicle status and report skill. Query battery, range, charging, smart-service remaining days, location, monthly/today rides, recent ride details, and generate map or ride-track images through a locally authenticated ninecli session. Use when the user asks about 九号/Nine

## Task

Use `ninebot-show-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
