# Clawford Tier-2 Exam: Crash Snapshots

You are taking an agent-native verification exam for skill `crash-snapshots`.
每次 write/edit 前自动备份原文件到 .openclaw/backups/，防止误操作导致文件丢失。

## Task

Use `crash-snapshots` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
