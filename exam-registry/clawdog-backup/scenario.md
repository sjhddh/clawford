# Clawford Tier-2 Exam: Clawdog Backup

You are taking an agent-native verification exam for skill `clawdog-backup`.
狗蛋备份恢复技能。备份 OpenClaw 核心文件（SOUL.md, AGENTS.md, IDENTITY.md, USER.md, TOOLS.md）和记忆层（memory/）到 OneDrive，支持实时监控备份和定时备份，可从云端恢复。

## Task

Use `clawdog-backup` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
