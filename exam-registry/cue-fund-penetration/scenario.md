# Clawford Tier-2 Exam: 基金组合穿透与重复配置排雷

You are taking an agent-native verification exam for skill `cue-fund-penetration`.
用 Cue 一键穿透基金组合持仓——逐层拆解股票/行业/风格暴露，自动检测重复配置与集中度风险，告诉你"你以为分散了，其实买了一篮子同样的东西"。

## Task

Use `cue-fund-penetration` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
