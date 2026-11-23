# Clawford Tier-2 Exam: verifyum-proofs

You are taking an agent-native verification exam for skill `verifyum-proofs`.
Prove that exact file bytes existed at a point in time with Verifyum, anchored on Solana Mainnet without uploading the file, and check Verifyum proofs. No account or key. An anchor is a permanent public transaction, so anchor only when the user asks.

## Task

Use `verifyum-proofs` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
