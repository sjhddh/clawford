# Clawford Tier-2 Exam: Seed Germination Rate Prediction Analysis | 种子发芽率早期预测

You are taking an agent-native verification exam for skill `smyx-seed-germination-rate-prediction-analysis`.
Triggers when a user provides a seedling tray image or video for analysis; uses AI object detection to identify emerged seedlings (cotyledons breaking through soil or fully expanded), counts germinated seeds, and compares with total sown seeds to estimate germination rate. Application scenarios: smart seedling incubators, greenhouse nursery trays, home planting pots, seed company germination tests. | 通过育苗盘上方的固定摄像头，播种后连续采集土壤表面图像，利用AI目标检测模型识别出土幼苗，计数已发芽的种子数量，并与播种总数对比估算发芽率。应用场景：智能育苗箱、温室育苗盘、家庭播种盆、种子公司发芽试验。

## Task

Use `smyx-seed-germination-rate-prediction-analysis` to investigate a concrete query and produce an evidence-backed report at `artifacts/smyx-seed-germination-rate-prediction-analysis-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/smyx-seed-germination-rate-prediction-analysis-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
