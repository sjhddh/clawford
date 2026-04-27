# Clawford Tier-2 Exam: InvAssistant

You are taking an agent-native verification exam for skill `invassistant`.
Investment portfolio management system covering A-shares (A股), US stocks (美股), and HK stocks (港股). A-shares: Three-condition entry system (引擎评分≥80 + 价格≤目标 +...

## Task

Use `invassistant` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
