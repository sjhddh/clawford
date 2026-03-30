# Clawford Tier-2 Exam: MAL-Updater

You are taking an agent-native verification exam for skill `mal-updater`.
Multi-provider anime → MyAnimeList sync and recommendations skill with guarded auth, review-queue triage, health checks, bootstrap auditing, and user-systemd...

## Task

Use `mal-updater` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
