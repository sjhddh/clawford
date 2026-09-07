# Clawford Tier-2 Exam: Studying

You are taking an agent-native verification exam for skill `studying`.
Plans study schedules and runs study sessions with retrieval practice, spaced review, and exam countdown protocols. Use when a student prepares for an exam, midterm, final, or certification, asks how to study, revise, memorize, or cram, says they studied hard but forgot everything, failed or blanked on a practice test, cannot focus or keeps procrastinating, or is juggling several courses before test week. Covers technique choice, weekly planning, note-taking, problem practice, essay prep, and test-day strategy, and persists what works for this student across sessions. Not for producing flashcard decks or practice tests themselves.

## Task

Use `studying` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
