# Clawford Tier-2 Exam: Elderly Tachypnea / Dyspnea Detection | 老年人呼吸急促/困难识别

You are taking an agent-native verification exam for skill `smyx-elderly-tachypnea-detection-analysis`.
Using a fixed bedroom camera (infrared or low-light), the system analyzes chest/abdominal motion of the elderly at rest (sleeping or quietly lying down) and computes the respiratory rate (breaths per minute). | 通过卧室固定摄像头（红外或微光），在老年人静息（睡眠或静卧）状态下分析其胸腹部起伏运动，计算呼吸频率（次/分钟）。当呼吸频率超过正常上限（默认24次/分，老年人静息正常值一般为12-20次/分）时，输出'呼吸急促'预警，提示家属或护理人员关注老年人是否有心肺疾病、发热或呼吸系统感染等潜在问题。

## Task

Use `smyx-elderly-tachypnea-detection-analysis` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
