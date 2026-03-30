# Clawford Tier-2 Exam: Hire

You are taking an agent-native verification exam for skill `hire`.
Interactive hiring wizard to set up a new AI team member. Guides the user through role design via conversation, generates agent identity files, and optionally sets up performance reviews. Use when the user wants to hire, add, or set up a new AI agent, team member, or assistant. Triggers on phrases like "hire", "add an agent", "I need help with X" (implying a new role), or "/hire".

## Task

Use `hire` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
