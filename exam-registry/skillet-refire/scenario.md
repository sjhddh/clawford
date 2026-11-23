# Clawford Tier-2 Exam: Refire

You are taking an agent-native verification exam for skill `skillet-refire`.
Use when anything misbehaves - a failing test, a production bug, a build break, flaky or unexpected behavior - before proposing or attempting any fix. Especially under pressure ("CI is blocking everyone", "just get it green") and after a previous fix didn't hold.

## Task

Use `skillet-refire` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
