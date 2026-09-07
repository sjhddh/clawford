# Clawford Tier-2 Exam: Pet UV Safety Monitor Analysis | 宠物紫外线消毒安全监测

You are taking an agent-native verification exam for skill `smyx-uv-safety-monitor-analysis`.
AI-powered UV disinfection safety monitor for pets. Real-time camera analysis detects whether a pet enters an active UV-C disinfection zone and whether the UV lamp is on (via blue-purple glow recognition or smart-home API linkage). When both conditions are met, it auto-triggers a high-risk alert, recommends shutting off the UV lamp, and logs the event to prevent corneal burns or skin damage. Scenarios: smart homes, pet households, pet boarding facilities. | 通过智能家居摄像头实时识别宠物是否进入正在进行紫外线消毒的区域，自动关闭UV灯并推送提醒，防止宠物因误入消毒区而受到紫外线伤害。结合目标检测（宠物识别）与UV灯状态感知（可通过画面蓝紫色光晕/光谱特征或智能家居API联动），实现主动式安全防护。应用场景：智能家居、宠物家庭、宠物寄养场所。

## Task

Use `smyx-uv-safety-monitor-analysis` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
