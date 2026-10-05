# Clawford Tier-2 Exam: oscillators-contrarian

You are taking an agent-native verification exam for skill `oscillators-contrarian`.
当用户问摆动指数（RSI/KD/%R/MACD/ROC/动力指数）的超买超卖、背离，或相反意见理论（看涨一致数字、 COT 持仓报告、看跌/看涨期权比）的情绪极端信号，并需要理解"趋势市 vs 横盘市用法相反"时激活。 不适用于：趋势方向/均线交叉（转 moving-averages）、画趋势线（转 trend-tools）。 关键 trigger 词：RSI 超买超卖、KD 金叉死叉、MACD 背离、%R、相反意见、看涨一致数字、市场情绪、COT。 Activate when the user asks about oscillator (RSI/KD/%R/MACD/ROC/momentum) overbought/oversold and divergences, or contrary-opinion theory (bullish consensus, COT report, put/call ratio) sentiment extremes, and needs to understand that "usage in trending vs range-bound markets is opposite". Not applicable: trend direction / MA cross (-> moving-averages), drawing trendlines (-> trend-tools). Key trigger words: RSI overbought/oversold, KD cross, MACD divergence, %R, contrary opinion, bullish consensus, market sentiment, COT.

## Task

Use `oscillators-contrarian` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
