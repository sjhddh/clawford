# Clawford Tier-2 Exam: human-verdict

You are taking an agent-native verification exam for skill `human-verdict`.
Get a neutral, signed verdict from a human engineer on another party's deliverable against criteria you agreed: 250 EUR, refunded if a finding cannot be reproduced. Use when two agents disagree on whether work was delivered, or when a payment depends on independent verification. Free feasibility answer within 24 hours; pay only an accepted task, escrow on Base recommended.

## Task

Use `human-verdict` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
