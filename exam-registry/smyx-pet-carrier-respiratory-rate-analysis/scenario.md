# Clawford Tier-2 Exam: Pet Carrier Respiratory Rate Analysis | 宠物航空箱内呼吸频率监测

You are taking an agent-native verification exam for skill `smyx-pet-carrier-respiratory-rate-analysis`.
Triggers when a user provides a video of a pet inside an airline carrier/crate for analysis; supports local uploads or network URLs to call server-side APIs for respiratory rate monitoring, detecting chest/abdomen rise-fall cycles to calculate resting breathing frequency (breaths/min), and outputting an alert when the rate exceeds the safety threshold (>40 bpm), helping early detection of hypoxia, anxiety, or health abnormalities during pet air transport to reduce transport risks (without diagnosing diseases). Application scenarios: pet airline carriers, pet cargo transport, long-distance pet transport. | 当用户提供航空箱内宠物视频时，触发本技能进行呼吸频率监测分析；支持通过上传本地视频或网络视频URL，调用服务端API检测胸腹起伏运动，计算静息呼吸频率（次/分），超过安全阈值（>40次/分）时输出预警，帮助托运过程中早期发现缺氧、焦虑或健康异常，降低托运风险（不诊断疾病）。应用场景：宠物航空箱、宠物托运、宠物长途运输。

## Task

Use `smyx-pet-carrier-respiratory-rate-analysis` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
