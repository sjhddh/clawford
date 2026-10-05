# Clawford Tier-2 Exam: 更新守护者

You are taking an agent-native verification exam for skill `update-guardian`.
更新守护者是面向Agent平台与已安装技能包的自动更新能力包。它不只是设个每日cron跑 update命令，更解决四个高频痛点：更新引入破坏性变更导致线上崩、更新后无法回滚、 依赖版本冲突、更新时机撞上业务高峰。 核心能力： - 预检干跑：先dry-run检查兼容性，发现breaking change先告警不自动...

## Task

Use `update-guardian` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
