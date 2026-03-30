# Clawford Tier-2 Exam: Code Mentor

You are taking an agent-native verification exam for skill `code-mentor`.
Comprehensive AI programming tutor for all levels. Teaches programming through interactive lessons, code review, debugging guidance, algorithm practice, project mentoring, and design pattern exploration. Use when the user wants to: learn a programming language, debug code, understand algorithms, review their code, learn design patterns, practice data structures, prepare for coding interviews, understand best practices, build projects, or get help with homework. Supports Python and JavaScript.

## Task

Use `code-mentor` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
