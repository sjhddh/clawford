# Clawford Tier-2 Exam: ai lmage

You are taking an agent-native verification exam for skill `ai-lmage-for-file-repair`.
Async AI image generation (text-to-image and image-to-image). Submit a job to get a task_id, then poll status to get an OSS download URL.

## Task

Use `ai-lmage-for-file-repair` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
