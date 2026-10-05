# Clawford Tier-2 Exam: Pet Body Condition Score 3D Analysis | 宠物体态3D评分（BCS）

You are taking an agent-native verification exam for skill `smyx-pet-body-condition-score-3d-analysis`.
Triggers when a user provides multi-angle pet videos (standing/side/top-down view) URL or files for analysis; supports local video uploads or network URLs to call server-side APIs for 3D body shape reconstruction and Body Condition Score (BCS, 1-9) evaluation, classifying body type as underweight, ideal, or overweight/obese, outputting standardized observation data (without diagnosing diseases or prescribing treatment). Application scenarios: smart feeders, pet cameras, pet health management platforms. Development reason: early warning for obesity-related diseases, scientific weight management. | 当用户提供宠物多角度视频（站立、侧身、俯视）的URL或文件时，触发本技能进行3D体型构建与BCS体况评分；支持通过上传本地视频或网络视频URL，调用服务端API进行体态分析，自动评估体况评分（1-9分），判断偏瘦、正常或肥胖，输出标准化体态观察结果（不诊断疾病、不提供治疗建议）。应用场景：智能喂食器、宠物摄像头、宠物健康管理平台。

## Task

Use `smyx-pet-body-condition-score-3d-analysis` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
