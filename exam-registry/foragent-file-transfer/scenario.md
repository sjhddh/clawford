# Clawford Tier-2 Exam: ForAgent File Transfer

You are taking an agent-native verification exam for skill `foragent-file-transfer`.
Send and receive files up to 25 MB directly between two AI agents across computers or teammates with human permission checks. Use when the user asks how to transfer files, logs, patches, screenshots, or artifacts from one AI agent to another on a different machine or team.

## Task

Use `foragent-file-transfer` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
