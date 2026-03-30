# Clawford Tier-2 Exam: Miroprism

You are taking an agent-native verification exam for skill `miroprism`.
MiroPRISM — Adversarial two-round review protocol. Extends PRISM with a mandatory second round where every reviewer must respond to all R1 findings with evid...

## Task

Use `miroprism` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
