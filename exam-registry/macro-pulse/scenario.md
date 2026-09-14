# Clawford Tier-2 Exam: 宏观脉搏

You are taking an agent-native verification exam for skill `macro-pulse`.
每日宏观数据监控与推送机器人。自动巡检免费数据源（Trading Economics、FRED、国家统计局、 央行、财联社等），整合过去 24 小时发布的宏观数据与政策信息，配小白向科普解读后推送。 核心能力: - 多源巡检 + 异常源跳过：单源失败不阻断整体，记录降级日志 - 时区强制 GMT+8 过滤，避免"...

## Task

Use `macro-pulse` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
