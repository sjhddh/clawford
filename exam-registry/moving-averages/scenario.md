# Clawford Tier-2 Exam: moving-averages

You are taking an agent-native verification exam for skill `moving-averages`.
当用户要用移动平均线（MA）判断趋势、选择均线类型/周期/组合，或理解四周规则（唐奇安突破）、 4-9-18 天组合，并清楚其"滞后性"与"横盘失效"局限时激活。 不适用于：超买超卖摆动指数（转 oscillators-contrarian）、画趋势线（转 trend-tools）。 关键 trigger 词：均线金叉死叉、移动平均线、四周规则、双均线、EMA、均线滞后、4-9-18。 Activate when the user wants to use moving averages (MA) to judge trend, choose MA type/period/combination, or understand the four-week rule (Donchian breakout), the 4-9-18 day combo, and its limitations of "lag" and "failure in range-bound markets". Not applicable: overbought/oversold oscillators (-> oscillators-contrarian), drawing trendlines (-> trend-tools). Key trigger words: MA golden/death cross, moving average, four-week rule, dual MA, EMA, MA lag, 4-9-18.

## Task

Use `moving-averages` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
