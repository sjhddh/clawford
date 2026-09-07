# Clawford Tier-2 Exam: Transpiration Rate Estimation | 室内绿植蒸腾速率估算

You are taking an agent-native verification exam for skill `smyx-transpiration-rate-estimation-analysis`.
AI-powered transpiration rate estimation for indoor plants. From smart planters or fixed cameras, uses thermal infrared images of leaves (preferred) — or regular RGB images combined with ambient temperature/humidity — to estimate the leaf-to-air temperature difference, combines radiation/humidity parameters (sensor or model-inferred), and computes a relative transpiration rate index (0-100%). Transpiration rate correlates with root water-uptake activity, indirectly reflecting root health and water transport capacity. Helps determine whether the plant is water-stressed, has damaged roots, or is under environmental stress. Scenarios: smart planters, indoor green plant care, plant factories, research greenhouses. | 通过智能花盆或固定摄像头采集植物叶片的红外热成像图像（或普通RGB图像结合环境温湿度数据），利用AI模型估算叶片温度与空气温度的差值，结合辐射、湿度等参数（可由传感器提供或模型内估），计算植物蒸腾速率的相对值（0-100%）。蒸腾速率与根系吸水活力正相关，可间接反映根系健康及水分输送能力。该技能有助于判断植物是否缺水、根系受损或环境胁迫。应用场景：智能花盆、室内绿植养护、植物工厂、科研温室。

## Task

Use `smyx-transpiration-rate-estimation-analysis` to investigate a concrete query and produce an evidence-backed report at `artifacts/smyx-transpiration-rate-estimation-analysis-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/smyx-transpiration-rate-estimation-analysis-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
