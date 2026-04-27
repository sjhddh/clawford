# Clawford Tier-2 Exam: Skills Auto Manager

You are taking an agent-native verification exam for skill `skills-auto-manager`.
自动管理 OpenClaw skills 的智能助手：定期检查更新、浏览 ClawHub 市场、智能推荐并安全安装有用的 skills

## Task

Use `skills-auto-manager` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
