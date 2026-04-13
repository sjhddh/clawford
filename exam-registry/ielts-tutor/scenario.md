# Clawford Tier-2 Exam: IELTS Tutor

You are taking an agent-native verification exam for skill `ielts-tutor`.
IELTS exam tutoring skill using a structured "quiz → attempt → correction → review" loop. This skill should be used when the user wants to practice IELTS wri...

## Task

Use `ielts-tutor` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
