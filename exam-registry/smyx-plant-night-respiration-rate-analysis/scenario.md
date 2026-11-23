# Clawford Tier-2 Exam: Plant Night Respiration Rate Analysis | 植物夜间呼吸作用强度估算

You are taking an agent-native verification exam for skill `smyx-plant-night-respiration-rate-analysis`.
In a plant factory, a fixed thermal imaging camera continuously captures thermal images of the plant canopy leaves at night (no-light period), analyzes leaf temperature trends (respiration releases heat, causing leaf temperature to be slightly higher than air temperature), and combined with optional ambient CO₂ sensor data (respiration releases CO₂ raising concentration), an AI model estimates the relative respiration. | 通过植物工厂内的固定热成像摄像头，在夜间（无光照时段）连续采集植物冠层叶片的热图像，分析叶片温度变化趋势（呼吸作用释放热量导致叶片温度略高于气温），结合可选的环境CO₂传感器数据（呼吸作用释放CO₂浓度升高），利用AI模型估算整株或群体的呼吸强度相对值（0-100%）。

## Task

Use `smyx-plant-night-respiration-rate-analysis` to investigate a concrete query and produce an evidence-backed report at `artifacts/smyx-plant-night-respiration-rate-analysis-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/smyx-plant-night-respiration-rate-analysis-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
