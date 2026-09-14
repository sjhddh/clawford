# Clawford Tier-2 Exam: Mass Production Quality Gate

You are taking an agent-native verification exam for skill `skill-mass-production-quality-gate`.
量产阶段质量拦截与异常遏制升级助手；基于异常分级与升级阈值生成围堵/升级流程卡与跟踪看板，区别于 NPI 新品质量门与 Safe Launch 安全投产。

## Task

Use `skill-mass-production-quality-gate` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
