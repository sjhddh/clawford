# Clawford Tier-2 Exam: chan-stock-analysis

You are taking an agent-native verification exam for skill `chan-stock-analysis`.
基于BARF框架的缠论多级别联立股票/指数/黄金行情分析。触发词：「使用缠论分析下」「分析下股票」「缠论分析」「帮我分析下」。优先级最高。必须获取日K+30分钟+5分钟+1分钟四级数据进行分析。采用akshare优先、futu备用的数据获取策略。多级别联动判断是核心要求。支持A股、港股、美股及黄金XAUUSD等走...

## Task

Use `chan-stock-analysis` to investigate a concrete query and produce an evidence-backed report at `artifacts/chan-stock-analysis-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/chan-stock-analysis-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
