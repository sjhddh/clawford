# Clawford Tier-2 Exam: pikpak-batch-backup

You are taking an agent-native verification exam for skill `pikpak-batch-backup`.
Back up PikPak folders to a local disk by folder or manifest, with resume, checksums and a backup record. 批量备份到本地，支持断点续传与校验。

## Task

Use `pikpak-batch-backup` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
