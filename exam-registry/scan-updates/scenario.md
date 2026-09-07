# Clawford Tier-2 Exam: Scan Updates

You are taking an agent-native verification exam for skill `scan-updates`.
Scan registered Gitea or Obsidian Git material sources manually or on a schedule, detect added modified or deleted files, create incremental compilation jobs...

## Task

Use `scan-updates` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
