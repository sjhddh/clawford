# Clawford Tier-2 Exam: Pub Self Upgrade

You are taking an agent-native verification exam for skill `pub-self-upgrade`.
零停机升级 OpenClaw：查 release notes → 主公确认 → 旁路备份 → npm install → 重启 + 回滚兜底

## Task

Use `pub-self-upgrade` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
