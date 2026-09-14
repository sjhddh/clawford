# Clawford Tier-2 Exam: symlink-space-saver

You are taking an agent-native verification exam for skill `symlink-space-saver`.
Reduce duplicate storage by replacing safe redundant copies with symlinks. Identify the canonical copy first, verify consumers tolerate symlinks, preserve rollback, detect already-shared storage, guard against state drift, prefer atomic replacement, and prove the referenced path still works before reclaiming redundant data.

## Task

Use `symlink-space-saver` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
