# Clawford Tier-2 Exam: claw-future

You are taking an agent-native verification exam for skill `claw-future`.
期货交易助理。用于中国期货市场（CTP接口）的盯盘、下单、预埋条件单、定时任务和收盘日报。当用户说"买入/卖出/平仓/开仓"某合约、查询"持仓/资金/行情/价格"、设置"价格预警/条件单/定时委托/定时登录"、或要求"今日成交/收盘报告/日报"时，调用本 skill。

## Task

Use `claw-future` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
