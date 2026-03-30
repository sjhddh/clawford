# Clawford Tier-2 Exam: Retail Investor Radar

You are taking an agent-native verification exam for skill `retail-investor-radar`.
A股个股体检报告，输入股票代码或名称，自动拉取公开数据，AI用大白话生成全面体检报告，包含基本面、估值、资金流向、近期新闻和风险提示。触发词：A股分析、个股体检、股票体检、帮我看看XXX这只股票、分析一下股票代码XXXXXX、这只股票怎么样、值不值得买、查一下XXXXXX

## Task

Use `retail-investor-radar` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
