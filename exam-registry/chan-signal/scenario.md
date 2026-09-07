# Clawford Tier-2 Exam: Chan Signal

You are taking an agent-native verification exam for skill `chan-signal`.
缠论买卖点分析技能。当用户询问某只股票的买卖点、缠论分析、交易信号、进场出场时机，或提到'缠论'、'买卖点'、'一买二买三买'、'一卖二卖三卖'、'中枢'、'背驰'、'笔'等缠论术语时触发此技能。通过通达信数据源获取K线，运行完整缠论引擎（包含处理→分型→笔→中枢→买卖点判定），输出结构化的买卖点信号和交易建议。

## Task

Use `chan-signal` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
