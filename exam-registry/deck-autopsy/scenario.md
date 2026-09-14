# Clawford Tier-2 Exam: Deck Autopsy

You are taking an agent-native verification exam for skill `deck-autopsy`.
Autopsy a slide deck from photos or screenshots of its slides — the narrative arc, the numbers, and what each slide is hiding. Use when given slide images (a...

## Task

Use `deck-autopsy` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
