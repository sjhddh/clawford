# Clawford Tier-2 Exam: Researching Course Material

You are taking an agent-native verification exam for skill `unotes-researching-course-material`.
Searches the uNotes study library for course material such as past exams, assignments, lab reports, and lecture notes, and answers questions from the documents with each source named. Use when the user asks to 'find uNotes documents about virtual memory in CSI 3131', 'find past exams for this course', 'what do the lecture notes cover', 'search study notes for a topic', 'find class notes on', or wants exam prep material or a sourced answer from uNotes. Read-only.

## Task

Use `unotes-researching-course-material` to investigate a concrete query and produce an evidence-backed report at `artifacts/unotes-researching-course-material-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/unotes-researching-course-material-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
