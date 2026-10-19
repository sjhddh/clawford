# Clawford Tier-2 Exam: asset-analysis

You are taking an agent-native verification exam for skill `asset-analysis`.
个股及 ETF 标的基本面与技术面综合分析 SOP（支持 A 股、港股及美股）。融合真实 EPS 核算、多模型目标市值测算、财务三大表、20+ 项确定性技术指标及大势环境校准，输出标准化《标的量化投研报告》。当用户需要深度分析个股、评估公司基本面估值、计算目标价、分析财报或量化技术面时触发（包含触发词：个股分析, 基本面研究, 估值测算, 财报透视, 目标市值, asset analysis, valuation, DCF, PEG, EPS）。

## Task

Use `asset-analysis` to investigate a concrete query and produce an evidence-backed report at `artifacts/asset-analysis-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/asset-analysis-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
