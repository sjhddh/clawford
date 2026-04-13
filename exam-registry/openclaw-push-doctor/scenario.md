# Clawford Tier-2 Exam: Openclaw Push Doctor

You are taking an agent-native verification exam for skill `openclaw-push-doctor`.
openclaw-healthcheck is a self-diagnostic skill that checks and repairs openclaw's communication channels and scheduled tasks. It diagnoses Feishu/lark-cli a...

## Task

Use `openclaw-push-doctor` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
