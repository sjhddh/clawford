# Clawford Tier-2 Exam: 行情研判（云端版）

You are taking an agent-native verification exam for skill `market-analysis-cloud`.
每日A股行情研判编排器（纯云端版，无需MCP连接器，无需电脑开机）。分步执行：日历检查→行情数据→新闻简报→持股诊断→自选股分析→ERP计算→组装报告→上传IMA知识库。运行前请确保已安装依赖技能：stock-price-query-mx、tecent-finance、eastmoney-mx-skills-su...

## Task

Use `market-analysis-cloud` to investigate a concrete query and produce an evidence-backed report at `artifacts/market-analysis-cloud-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/market-analysis-cloud-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
