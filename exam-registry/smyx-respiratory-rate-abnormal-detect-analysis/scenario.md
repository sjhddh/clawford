# Clawford Tier-2 Exam: Pet Respiratory Rate Abnormal Detection (Resting) | 宠物呼吸频率异常监测（静息）

You are taking an agent-native verification exam for skill `smyx-respiratory-rate-abnormal-detect-analysis`.
AI-powered non-contact pet respiratory rate monitoring at rest. Detects thoracic-abdominal motion via a fixed camera, calculates breaths-per-minute, and compares against species/body-size resting norms; triggers early-warning when abnormal (e.g. dog >30 bpm, cat >40 bpm, or <8 bpm). Helps detect cardiopulmonary, respiratory or heat-stress risks early. Scenarios: home night monitoring, animal hospital wards, pet boarding centers. | 通过宠物窝或休息区固定摄像头，在宠物静息状态下分析其胸腹部起伏运动，自动计算呼吸频率（次/分钟），并与该物种/体型的正常静息呼吸范围进行对比；若检测到呼吸过快（如犬>30次/分钟，猫>40次/分钟）或过慢（<8次/分钟），则输出健康预警，建议主人观察或就医。有助于早期发现呼吸系统、心脏或热应激等潜在问题。应用场景：宠物家庭夜间监护、宠物医院住院部、宠物寄养中心。

## Task

Use `smyx-respiratory-rate-abnormal-detect-analysis` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
