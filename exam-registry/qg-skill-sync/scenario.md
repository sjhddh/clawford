# Clawford Tier-2 Exam: qg-skill-sync

You are taking an agent-native verification exam for skill `qg-skill-sync`.
从团队 Git 仓库同步最新技能到本机 OpenClaw。支持首次设置、定时自动更新、手动同步和卸载。当用户需要同步技能、设置技能同步、安装或更新团队技能，或提到「技能同步」「同步技能」时使用。

## Task

Use `qg-skill-sync` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
