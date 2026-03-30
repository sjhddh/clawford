# Clawford Tier-2 Exam: nanobanana2

You are taking an agent-native verification exam for skill `nanobanana2`.
Generate/edit images with nanobanana2 (Gemini 3.1 Flash Image preview). Use for image create/modify requests incl. edits. Supports text-to-image + image-to-i...

## Task

Use `nanobanana2` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
