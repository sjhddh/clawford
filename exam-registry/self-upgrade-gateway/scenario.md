# Clawford Tier-2 Exam: Self Upgrade Gateway

You are taking an agent-native verification exam for skill `self-upgrade-gateway`.
零停机升级 OpenClaw Gateway：查 release notes → 主公确认 → 旁路备份 → npm install → node版本自动检测 → 重启 + 回滚兜底

## Task

Use `self-upgrade-gateway` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
