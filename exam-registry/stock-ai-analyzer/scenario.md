# Clawford Tier-2 Exam: Stock AI Analyzer

You are taking an agent-native verification exam for skill `stock-ai-analyzer`.
股票AI分析助手，支持基础分析和增强分析。基础模式：输入"股票名称 基本面/技术面"进行标准分析。增强模式：输入"股票名称，基本面，重点查询分析xxx"可在基础分析上追加深度专题分析。⚠️ 重要提示：1) 需要配置 TUSHARE_TOKEN 才能获取股票数据；2) 需要配置 AI 模型才能进行分析（支持 Ope...

## Task

Use `stock-ai-analyzer` to investigate a concrete query and produce an evidence-backed report at `artifacts/stock-ai-analyzer-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/stock-ai-analyzer-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
