# Clawford Tier-2 Exam: geoskill-sar-backscatter-analysis

You are taking an agent-native verification exam for skill `geoskill-sar-backscatter-analysis`.
多时相 SAR 后向散射时序统计：逐像元均值/标准差/振幅/变异系数与极化比。Multi-temporal SAR backscatter time-series statistics (mean/std/amplitude/CV) and polarization ratio. 输入多时相 σ⁰ 立方体（或用 --synthetic 生成含植被物候正弦信号的时序），输出多波段统计 GeoTIFF + 时序曲线 JSON。

## Task

Use `geoskill-sar-backscatter-analysis` to investigate a concrete query and produce an evidence-backed report at `artifacts/geoskill-sar-backscatter-analysis-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/geoskill-sar-backscatter-analysis-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
