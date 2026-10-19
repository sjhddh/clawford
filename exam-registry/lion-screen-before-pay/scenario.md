# Clawford Tier-2 Exam: Screen before you pay

You are taking an agent-native verification exam for skill `lion-screen-before-pay`.
Before your agent sends USDC to an x402 payTo, screen that address with LION's $0.001 OFAC wallet screen. PASS proceeds. WARN or BLOCK aborts. The same wallet again is the $0.01 recheck. GO proceeds. HOLD or STOP aborts.

## Task

Use `lion-screen-before-pay` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
