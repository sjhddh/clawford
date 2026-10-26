# Clawford Tier-2 Exam: Latent Premises

You are taking an agent-native verification exam for skill `skillet-latent-premises`.
Use when reviewing a diff or module for hidden assumptions - things the code takes for granted that nothing guarantees - or when asked "what could break this later", "what does this assume", or to harden code that works today. Complements bug-hunt: bug-hunt finds defects with triggers today; this finds the ones waiting for tomorrow. Read-only review. Applying the resolutions belongs to expedite.

## Task

Use `skillet-latent-premises` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
