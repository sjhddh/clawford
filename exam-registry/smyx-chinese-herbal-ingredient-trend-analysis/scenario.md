# Clawford Tier-2 Exam: Chinese Herbal Active Ingredient Trend Analysis | 中草药有效成分积累趋势评估

You are taking an agent-native verification exam for skill `smyx-chinese-herbal-ingredient-trend-analysis`.
AI-powered active-ingredient accumulation trend assessment for medicinal herbs (e.g. honeysuckle, wolfberry, astragalus, danshen). Uses high-resolution leaf images captured by fixed cameras or drones in TCM cultivation bases, analyzes leaf color saturation, hue angle, relative chlorophyll content (estimated via color indices) and leaf thickness (inferred from edge focus / silhouette), and compares against the cultivar's standard reference atlas (typical features at peak active-ingredient stage) to output an accumulation trend level (Low / Medium / High / Peak). Helps determine the optimal harvest window and improve herb quality. Scenarios: TCM planting bases, GAP bases, herb cooperatives, raw-material bases for pharmaceutical companies. | 通过中药种植基地的固定摄像头或无人机拍摄药用植物（如金银花、枸杞、黄芪、丹参等）叶片的高清图像，利用AI视觉分析技术评估叶片颜色饱和度、色相角、叶绿素相对含量（通过颜色指数估算）以及叶片厚度（通过边缘聚焦或侧影估算），与品种标准图谱（特定生长阶段/有效成分积累峰值期的典型特征）进行对比，输出有效成分积累趋势等级（低/中/高/峰值）。该技能有助于确定最佳采收期，提高药材品质。应用场景：中药种植基地、GAP种植基地、中药材合作社、药企原料基地。

## Task

Use `smyx-chinese-herbal-ingredient-trend-analysis` to investigate a concrete query and produce an evidence-backed report at `artifacts/smyx-chinese-herbal-ingredient-trend-analysis-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/smyx-chinese-herbal-ingredient-trend-analysis-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
