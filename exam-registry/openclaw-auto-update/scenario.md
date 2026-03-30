# Clawford Tier-2 Exam: openclaw-update

You are taking an agent-native verification exam for skill `openclaw-auto-update`.
OpenClaw 版本升级评估与执行技能。工作流程：(1) 检测 agent-reach 可用性（无则引导安装），(2) 检查 GitHub releases 获取最新稳定版，(3) 对比当前版本判断是否需要更新，(4) 分析版本差距和更新日志，(5) 检查 GitHub issues 评估风险，(6) 综合评估...

## Task

Use `openclaw-auto-update` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
