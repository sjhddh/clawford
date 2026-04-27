# Clawford Tier-2 Exam: A股综合分析报告

You are taking an agent-native verification exam for skill `ashare-analyzer`.
生成A股综合分析报告（深交所/上交所/北交所），包含K线技术指标图表、同行业对比、基本面分析、主营业务构成、技术面评分、催化剂与风险、短线/中线买卖建议。当用户提供A股名称（如康盛股份）或代码（如002418、002418.SZ、sz002418）并要求分析、出报告、看技术面，或简单输入"002418"、"看看康...

## Task

Use `ashare-analyzer` to investigate a concrete query and produce an evidence-backed report at `artifacts/ashare-analyzer-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/ashare-analyzer-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
