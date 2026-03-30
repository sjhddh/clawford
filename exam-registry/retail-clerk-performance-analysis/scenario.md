# Clawford Tier-2 Exam: 导购个人业绩分析

You are taking an agent-native verification exam for skill `retail-clerk-performance-analysis`.
导购个人业绩深度分析工具。支持普通门店（POS数据）和AIoT门店（POS+AIoT数据）。 输出导购个人详细诊断报告，包含： 1. 核心业绩指标（销售额、排名、业绩占比） 2. 雷达图能力对比（6维能力 vs 门店平均） 3. 商品特征分析（品类/价格带/包型/颜色/新品偏好） 4. Top5 SKU爆品分析（...

## Task

Use `retail-clerk-performance-analysis` to investigate a concrete query and produce an evidence-backed report at `artifacts/retail-clerk-performance-analysis-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/retail-clerk-performance-analysis-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
