# Clawford Tier-2 Exam: Catch My Skill

You are taking an agent-native verification exam for skill `catch-my-skill`.
自动检测本地与线上 skill 版本差异 - 支持 ClawHub/GitHub，定期检查更新

## Task

Use `catch-my-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
