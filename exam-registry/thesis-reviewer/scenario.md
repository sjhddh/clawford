# Clawford Tier-2 Exam: Thesis Reviewer

You are taking an agent-native verification exam for skill `thesis-reviewer`.
Use when the user wants to review, evaluate, or provide feedback on a master's or doctoral thesis (硕士/博士学位论文). Triggers on keywords like "论文评审", "学位论文", "the...

## Task

Use `thesis-reviewer` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
