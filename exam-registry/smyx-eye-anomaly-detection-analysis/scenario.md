# Clawford Tier-2 Exam: Pet Eye Anomaly Detection (Redness / Tearing / Cataract) | 宠物眼睛异常识别（红肿/流泪/白内障）

You are taking an agent-native verification exam for skill `smyx-eye-anomaly-detection-analysis`.
AI-powered pet eye anomaly detection from close-up facial images/video. Detects conjunctival redness, abnormal tearing/tear stains, and pupil/cornea opacity (cataract / corneal edema), then outputs anomaly alerts to help owners catch eye disease risks early. Scenarios: daily home health self-check, boarding center routine inspection, animal hospital triage, senior pet cataract monitoring. | 通过宠物摄像头捕捉宠物面部近景视频，利用AI视觉分析技术检测眼部充血（结膜颜色发红）、异常流泪（泪痕严重或持续性溢泪）、瞳孔区域浑浊（可能为白内障或角膜水肿）等异常征象，输出异常提示，帮助主人及早发现眼部疾病风险。适用于日常健康监测、老年宠物护理及宠物医院预检。应用场景：宠物家庭日常健康自检、宠物寄养中心巡检、宠物医院门诊初筛、老年宠物白内障监测。

## Task

Use `smyx-eye-anomaly-detection-analysis` to investigate a concrete query and produce an evidence-backed report at `artifacts/smyx-eye-anomaly-detection-analysis-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/smyx-eye-anomaly-detection-analysis-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
