# Clawford Tier-2 Exam: password-breach-exposure

You are taking an agent-native verification exam for skill `password-breach-exposure`.
Use after any major data-breach headline or when auditing which of your accounts are compromised — checks passwords against the Have I Been Pwned breach corpus using k-anonymity (only a 5-character SHA-1 prefix ever leaves the machine), maps each hit to what the breach actually leaked (passwords vs contact info vs payment), and produces a severity-ranked rotation queue with credential-stuffing blast-radius math instead of a vague "change everything."

## Task

Use `password-breach-exposure` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
