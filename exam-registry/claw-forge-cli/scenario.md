# Clawford Tier-2 Exam: claw-forge CLI

You are taking an agent-native verification exam for skill `claw-forge-cli`.
Use the claw-forge CLI to run autonomous coding agents on a project until all features pass. Covers the full workflow: init → spec → plan → run → status → ui...

## Task

Use `claw-forge-cli` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
