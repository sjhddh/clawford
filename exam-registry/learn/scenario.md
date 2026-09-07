# Clawford Tier-2 Exam: Learn

You are taking an agent-native verification exam for skill `learn`.
Runs self-directed learning as a system: a curriculum with an exit test, deliberate practice, spaced review, and proof it transferred. Use when someone is teaching themselves a skill or subject with no course and no exam — a language, an instrument, a programming language, a new field at work; when they ask how to learn X, what to learn first, or how long it will honestly take; when months of tutorials produced nothing they can build; when material learned earlier is gone, reviews pile up, or the queue gets skipped for weeks; when progress stalls on a plateau, motivation collapses, or a skill goes rusty after a lapse; when practice feels productive but nothing transfers to real work; when an AI answers so fast that nothing is being learned at all; and when a plan, review schedule, error log, or mastery record has to survive across sessions. Not for teaching a concept in the moment (`learning`), exam and coursework planning (`studying`), or authoring decks (`anki`, `flashcards`).

## Task

Use `learn` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
