# Clawford Tier-2 Exam: Anki

You are taking an agent-native verification exam for skill `anki`.
Builds and repairs Anki decks: card writing, FSRS and SM-2 deck options, leeches, review workload, imports, and sync. Use when making cards from notes, PDFs, lectures, textbooks, or vocabulary lists; when reviews pile up, take too long, or a backlog builds after time off; when retention drops, cards keep failing, or a deck falls into ease hell; when choosing FSRS vs SM-2, or setting desired retention, new cards per day, learning steps, and leech thresholds; when a deck asks to upload or download in a one-way sync, loses media, or fails Check Database; when importing CSV/TSV, an .apkg, or a shared deck, or migrating from Quizlet, Memrise, or SuperMemo; when cards are due but nothing appears; and when a fixed exam date forces a study plan. Covers language decks, medical and board decks, code and math material, and personal decks such as names and faces or poetry. Not for generic flashcard writing outside Anki, spaced-repetition algorithm theory, study-session planning, or add-on development.

## Task

Use `anki` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
