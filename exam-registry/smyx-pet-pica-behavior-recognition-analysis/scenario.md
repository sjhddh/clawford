# Clawford Tier-2 Exam: Pet Pica Behavior Recognition | 宠物异食行为识别（啃咬电线/塑料）

You are taking an agent-native verification exam for skill `smyx-pet-pica-behavior-recognition-analysis`.
Triggers when a user provides an indoor camera video for analysis; supports local uploads or network URLs to call server-side APIs for pet pica-behavior recognition, detecting contact between the pet's mouth and non-food hazardous items (electric wires, plastic bags, socks, tissues, toy fragments, etc.); when the contact lasts ≥ 2 seconds, outputs a warning signal to help prevent intestinal obstruction, electric shock and other dangers (without diagnosing diseases). Application scenarios: indoor cameras, pet safety monitoring, smart-home security. | 当用户提供室内监控视频时，触发本技能进行异食行为识别；支持通过上传本地视频或网络视频URL，调用服务端API检测宠物嘴部与电线、塑料袋、袜子、纸巾、玩具碎片等非食物物品的接触动作；持续接触 ≥ 2 秒时输出预警信号，预防肠梗阻、触电等危险（不诊断疾病）。应用场景：室内摄像头、宠物安全监控、智能家居安防。

## Task

Use `smyx-pet-pica-behavior-recognition-analysis` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
