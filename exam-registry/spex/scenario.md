# Clawford Tier-2 Exam: spex

You are taking an agent-native verification exam for skill `spex`.
Spec-Driven Development (Spex) skill that manages the full SDLC — from requirement analysis and design to incremental implementation and submission. Invoked manually via /spex <command>. Supports commands: create (new), modify, apply (run, do, go), apply-one-step (step), merge (submit), archive, init.

## Task

Use `spex` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
