# Clawford Tier-2 Exam: ddg-payment-rail-verify

You are taking an agent-native verification exam for skill `ddg-payment-rail-verify`.
Prove an agent's payment path still works end to end and keep proving it: a paid smoke test, a 402-envelope pre-flight, and a buyer-side trust probe of the seller you depend on. Use before going live, after changing a wallet or SDK, and as a weekly canary. Receipt verification is free.

## Task

Use `ddg-payment-rail-verify` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
