# Clawford Tier-2 Exam: Lawn Health Assessment | 草坪枯黄率与杂草密度评估

You are taking an agent-native verification exam for skill `smyx-lawn-health-assessment-analysis`.
AI-powered lawn health assessment from drone or fixed-camera top-down images. Uses semantic segmentation to distinguish healthy turf (green), wilting/yellow turf (yellow-brown), bare soil and weeds (off-species color/texture), then computes wilting area ratio and weed coverage ratio, and outputs a composite lawn health score (0-100). Helps managers of golf courses, courtyards or municipal greenways quantify turf quality and guide irrigation, fertilization and weeding operations. Scenarios: home courtyards, golf courses, municipal park lawns, sports fields. | 通过无人机或固定摄像头拍摄草坪的俯视图像，利用AI语义分割技术区分健康草坪（绿色）、枯黄草坪（黄/褐色）、裸土以及杂草（非目标草种，颜色和纹理不同），计算枯黄面积占比和杂草覆盖面积占比，综合评估草坪健康评分（0-100分）。该技能有助于高尔夫球场、庭院或市政绿地管理者量化草坪质量，指导灌溉、施肥及除草作业。应用场景：家庭庭院、高尔夫球场、市政公园草坪、运动场。

## Task

Use `smyx-lawn-health-assessment-analysis` to investigate a concrete query and produce an evidence-backed report at `artifacts/smyx-lawn-health-assessment-analysis-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/smyx-lawn-health-assessment-analysis-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
