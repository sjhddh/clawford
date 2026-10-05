# Clawford Tier-2 Exam: time-cycles

You are taking an agent-native verification exam for skill `time-cycles`.
当用户问时间周期（CRB 10.5 个月、28 天交易周期、季节性）、用"波峰左移/右移"判趋势拐点，或想用 周期窗口择时，并需要"周期须与传统信号验证""熊市少做周期抄底"等约束时激活。 不适用于：数艾略特波浪（转 elliott-wave）、均线趋势跟踪（转 moving-averages）。 关键 trigger 词：周期、季节性、波峰左移右移、28天、10.5个月、时间窗、1月高点、大豆4-7月、天数、上涨下跌天数。 Activate when the user asks about time cycles (CRB 10.5-month, 28-day trading cycle, seasonality), uses "peak left/right shift" to judge turning points, or wants to time with cycle windows, with constraints like "cycles must be confirmed by traditional signals" and "avoid cycle bottom-fishing in bear markets". Not applicable: counting Elliott waves (-> elliott-wave), MA trend-following (-> moving-averages). Key trigger words: cycle, seasonality, peak left/right shift, 28 days, 10.5 months, time window, January high, soybean Apr-Jul, day count, up/down day count.

## Task

Use `time-cycles` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
