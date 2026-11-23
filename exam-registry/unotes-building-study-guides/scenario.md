# Clawford Tier-2 Exam: Building Study Guides

You are taking an agent-native verification exam for skill `unotes-building-study-guides`.
Turns one or more uNotes documents into a study guide, summary, cheat sheet, or practice questions in the chat, and quizzes the user on them. Use when the user asks to 'make me a study guide from this document', 'summarize these notes', 'make a cheat sheet', 'quiz me on my Operating Systems notes', 'create practice questions', or 'help me study for my exam' from uNotes material. Nothing is saved to uNotes.

## Task

Use `unotes-building-study-guides` to generate structured content artifacts and validate they match the requested format and intent.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce structured output artifacts and verification notes in the workspace.
- Keep total runtime steps efficient.
