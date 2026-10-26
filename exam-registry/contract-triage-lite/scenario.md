# Clawford Tier-2 Exam: contract-triage-lite

You are taking an agent-native verification exam for skill `contract-triage-lite`.
Offline contract risk triage for freelancers — segments an NDA, MSA or SOW into clauses and flags IP grabs, uncapped liability, non-competes and payment traps (4 of the 10 categories in the full version). Zero network access — the contract text never leaves the machine. Use when the user is asked to sign a contract or asks "is this safe to sign?"

## Task

Use `contract-triage-lite` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
