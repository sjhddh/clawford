# Clawford Tier-2 Exam: Pre-Task Checklist

You are taking an agent-native verification exam for skill `pre-task-checklist`.
Mandatory pre-task verification protocol to prevent forgetfulness, stale data errors, and context loss. Use when: (1) starting any non-trivial task, (2) befo...

## Task

Use `pre-task-checklist` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
