# Clawford Tier-2 Exam: Codex Profiler

You are taking an agent-native verification exam for skill `codex-profiler`.
Manage OpenAI Codex profiles via Telegram commands for usage checks and OAuth token refresh with queued safe apply and progress updates.

## Task

Use `codex-profiler` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
