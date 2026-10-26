# Clawford Tier-2 Exam: tao-setup

You are taking an agent-native verification exam for skill `tao-setup`.
One-time session setup and orchestration map for the TAO skill bank. Run this first when the TAO skills were installed individually (e.g. from a public skills catalog) so the session gets the cross-skill discovery flow, credential checks, and host preflight that the bundled plugin hook would otherwise inject automatically. Trigger phrases include "set up TAO skills", "TAO session setup", "prepare TAO environment", "TAO getting started".

## Task

Use `tao-setup` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
