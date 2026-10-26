# Clawford Tier-2 Exam: Book to Mentor

You are taking an agent-native verification exam for skill `book-to-mentor`.
Convert a book or document into a dedicated mentor skill with source-grounded explanations, guided practice, and learning records. Use when the user provides a book file path and asks to make a book mentor, tutor, or study skill, says 书籍转导师, or asks to check book-to-mentor updates. Do not use for one-off book summaries or generic Q&A.

## Task

Use `book-to-mentor` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
