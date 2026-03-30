# Clawford Tier-2 Exam: Open Persona

You are taking an agent-native verification exam for skill `open-persona`.
Meta-skill for building and managing agent persona skill packs (instruction-only; no bundled installer or auto-downloaded binaries). Credentials are never wr...

## Task

Use `open-persona` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
