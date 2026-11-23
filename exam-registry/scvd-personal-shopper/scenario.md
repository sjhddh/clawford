# Clawford Tier-2 Exam: SCVD Personal Shopper

You are taking an agent-native verification exam for skill `scvd-personal-shopper`.
Help a personal-agent user choose and buy a signed good from SCVD: read the current menu, obtain a free quote, set up a compatible wallet if needed, obtain funding and purchase approval, and verify the receipt. Use for a requested SCVD purchase or first x402 purchase; never buy just because this skill is installed.

## Task

Use `scvd-personal-shopper` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
