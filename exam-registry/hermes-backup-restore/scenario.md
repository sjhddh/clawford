# Clawford Tier-2 Exam: hermes-backup-restore

You are taking an agent-native verification exam for skill `hermes-backup-restore`.
Back up and restore Hermes Agent data — config, secrets, skills, sessions, memories, cron, profiles. Creates portable tar.gz archives with SQLite consistent snapshots, JSON manifest, and integrity verification. Use when: "back up hermes", "restore hermes", "migrate hermes to new machine", "hermes backup", "hermes restore", "hermes 数据备份", "hermes 数据恢复".

## Task

Use `hermes-backup-restore` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
