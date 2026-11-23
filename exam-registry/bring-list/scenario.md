# Clawford Tier-2 Exam: Bring! Shopping List

You are taking an agent-native verification exam for skill `bring-list`.
Manage Bring! shopping lists (Einkaufsliste / grocery list) — add, catalog-match, preview, remove, check off items, batch/stdin ops, and default lists. Use when a user wants to set up Bring! or manage shopping-list items. Setup passwords are entered only in the user's own terminal and are never accepted in chat or stored on disk.

## Task

Use `bring-list` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
