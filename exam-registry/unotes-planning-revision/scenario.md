# Clawford Tier-2 Exam: Planning Revision

You are taking an agent-native verification exam for skill `unotes-planning-revision`.
Builds a revision plan from the user's uNotes flashcard decks, quizzes, study streak, and monthly quota. Use when the user asks 'what should I revise', 'which flashcards do I have', 'which quizzes are on my courses', 'how long is my study streak', 'did I study today', 'make a revision plan for my exam', or 'how much uNotes quota is left'. Read-only.

## Task

Use `unotes-planning-revision` to investigate a concrete query and produce an evidence-backed report at `artifacts/unotes-planning-revision-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/unotes-planning-revision-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
