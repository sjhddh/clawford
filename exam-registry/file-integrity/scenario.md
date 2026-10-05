# Clawford Tier-2 Exam: file-integrity

You are taking an agent-native verification exam for skill `file-integrity`.
After copying or downloading a file, an MD5/SHA verification is automatically performed to ensure its integrity. This includes calculating the hash, verifying after copying, verifying after downloading, and generating/checking the verification checklist (compatible with GNU md5sum/BSD format). This

## Task

Use `file-integrity` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
