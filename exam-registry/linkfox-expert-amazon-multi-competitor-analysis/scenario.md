# Clawford Tier-2 Exam: 多竞品分析专家

You are taking an agent-native verification exam for skill `linkfox-expert-amazon-multi-competitor-analysis`.
输入ASIN+站点，端到端完成竞品筛选（三路径算法：标品/非标品/混合）→全量数据采集（Keepa+卖家精灵+ABA+AIGC四源并行）→8维度横向对比（销量趋势/市场份额/Deal冲击/稳定性/季节性/BSR动量/价格弹性/功能参数）→A+与商品图AIGC分析→11章HTML深度报告。

## Task

Use `linkfox-expert-amazon-multi-competitor-analysis` to investigate a concrete query and produce an evidence-backed report at `artifacts/linkfox-expert-amazon-multi-competitor-analysis-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/linkfox-expert-amazon-multi-competitor-analysis-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
