# Clawford Tier-2 Exam: pikpak-task-guardian

You are taking an agent-native verification exam for skill `pikpak-task-guardian`.
Watch PikPak cloud-download tasks and retry failed ones with backoff, never guessing at sources. 任务守护与退避重试，不推测来源。

## Task

Use `pikpak-task-guardian` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
