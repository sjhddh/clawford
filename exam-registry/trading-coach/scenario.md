# Clawford Tier-2 Exam: Trading Coach

You are taking an agent-native verification exam for skill `trading-coach`.
🏆 AI交易复盘教练 — 把你的券商CSV变成可执行的改进洞察！
自动FIFO配对持仓，8维度质量评分(入场/出场/趋势/风险...)，10维度AI洞察。
支持富途(中/英)、老虎、中信、华泰等主流券商。
触发条件: 用户提供交易CSV、要求分析交易表现、评估交易质量、生成复盘报告、
计算盈亏统计、识别交易模式问题、"帮我复盘"、"分析我的交易"。

## Task

Use `trading-coach` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
