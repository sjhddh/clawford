# Clawford Tier-2 Exam: stock-pulse

You are taking an agent-native verification exam for skill `stock-pulse`.
A股智能决策仪表盘：一条命令看今日该买卖什么。输入股票代码，AI分析技术面+筹码，输出买/卖/观望信号和精确点位、单日走势图、月/年价格预测（蒙特卡洛）、综合买入建议。当用户想分析股票、看走势、预测价格、生成选股建议时触发。

## Task

Use `stock-pulse` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
