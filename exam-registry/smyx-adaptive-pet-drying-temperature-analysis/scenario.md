# Clawford Tier-2 Exam: Pet Adaptive Drying Temperature Recommendation | 宠物烘干温度自适应推荐

You are taking an agent-native verification exam for skill `smyx-adaptive-pet-drying-temperature-analysis`.
Triggers when a user provides a full-body image/video of a pet (multi-angle preferred) for analysis; supports local uploads or network URLs to call server-side APIs for breed/body-type recognition and fur-density estimation (sparse / medium / dense), then outputs a recommended drying temperature curve (temperature in ℃ + time in minutes) for personalized care to reduce scald risk (not a medical recommendation). Application scenarios: pet drying boxes, pet grooming salons, smart pet care devices. | 当用户提供宠物全身图像/视频（多角度最佳）时，触发本技能进行品种识别与毛发密度估算（稀疏/中等/浓密），输出个性化烘干温度曲线（温度 ℃ + 时长 分钟）参数，实现个性化护理，减少烫伤风险（不提供医疗建议）。应用场景：宠物烘干箱、宠物美容店、智能宠物护理设备。

## Task

Use `smyx-adaptive-pet-drying-temperature-analysis` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
