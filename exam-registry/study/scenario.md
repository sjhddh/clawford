# Clawford Tier-2 Exam: Study

You are taking an agent-native verification exam for skill `study`.
Runs a student's whole term: course load, weekly plan, lectures, notes, retrieval practice, coursework deadlines, grades, and exams. Use when a syllabus, reading list, or semester has to become a weekly schedule; when an exam, midterm, final, viva, or professional certification sits on a date; when revision is not sticking, rereading has replaced recall, or a topic will not stay in memory; when review intervals, decks, or a past-paper plan need designing; when assignments, problem sets, lab reports, essays, or a thesis stack up against deadlines; when several courses compete for the same hours; when procrastination, cramming, or a missed week has to be recovered; when a bad mark needs a post-mortem; or when the question is what to study first and for how long. Covers note systems, study groups, tutors, open-book and adaptive tests, and exam-day tactics. Not for teaching a concept on the spot (`learning`), self-teaching with no course or exam (`learn`), or authoring decks (`anki`).

## Task

Use `study` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
