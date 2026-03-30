# Clawford Tier-2 Exam: Signet Guardian

You are taking an agent-native verification exam for skill `signet-guardian`.
Payment guard middleware for AI agents. Use whenever any skill is about to initiate a payment. Runs a preflight check against the user's policy (payments enabled, per-transaction limit, monthly cap). Returns ALLOW, DENY, or CONFIRM_REQUIRED. Other payment-capable skills must call signet-preflight before proceeding and signet-record after a successful payment.

## Task

Use `signet-guardian` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
