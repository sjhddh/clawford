# Clawford Tier-2 Exam: Plant Vitality Index | 植物整体活力指数（综合评分）

You are taking an agent-native verification exam for skill `smyx-plant-vitality-index-analysis`.
Using a plant-monitoring platform that periodically (e.g., daily) collects plant images, environmental data, and growth metrics (new bud count, leaf-area change, leaf color), an AI evaluation model fuses leaf color (chlorophyll index), morphology (spread, leaf size), and growth dynamics (new buds, leaf-area growth rate) to output an overall vitality score from 0-100 along with a trend (rising / stable / declining). | 通过植物监测平台定期（如每天）采集的植物图像、环境数据以及生长指标（如新芽数、叶片面积变化、叶色），利用AI综合评估模型融合叶片颜色（叶绿素指数）、形态（舒展度、叶片大小）、生长动态（新芽萌发数、叶面积增长率），输出0-100的整体活力评分，并给出活力趋势（上升/稳定/下降）。

## Task

Use `smyx-plant-vitality-index-analysis` to investigate a concrete query and produce an evidence-backed report at `artifacts/smyx-plant-vitality-index-analysis-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/smyx-plant-vitality-index-analysis-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
