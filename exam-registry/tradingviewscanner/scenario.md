# Clawford Tier-2 Exam: scanner

You are taking an agent-native verification exam for skill `tradingviewscanner`.
跨市场股票技术指标扫描系统。数据来源 TradingView，支持 A股/港股/美股/日股。 从用户 Obsidian vault 中的 watchlist 读取 ticker 列表，运行14项技术信号扫描 （MA交叉、RSI、MACD、BOLL、放量突破、缩量回调、量价背离、周K共振、综合评分等）， 并将扫描报...

## Task

Use `tradingviewscanner` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
