# Clawford Tier-2 Exam: Project- & Time-Capsules

You are taking an agent-native verification exam for skill `kapsel`.
Project memory capsules — archive completed project knowledge to Google Drive and reload it on demand. Use this skill whenever the user mentions "Kapsel", "c...

## Task

Use `kapsel` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
