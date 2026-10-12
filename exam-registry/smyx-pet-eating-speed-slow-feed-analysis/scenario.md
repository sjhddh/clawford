# Clawford Tier-2 Exam: Pet Eating Speed Slow Feed Analysis | 宠物进食速度检测与慢食干预

You are taking an agent-native verification exam for skill `smyx-pet-eating-speed-slow-feed-analysis`.
Triggers when a user provides a video of the pet food-bowl area for analysis; supports local uploads or network URLs to call server-side APIs for eating-speed detection, recording start/end timestamps of feeding, estimating eating speed (g/s and seconds-per-bowl), and when the speed falls below the safety threshold (e.g. < 30 sec/bowl) emitting an intervention signal (slow-feed baffle pop-up or voice prompt) to prevent choking and vomiting (without diagnosing diseases). Application scenarios: smart slow-feeder bowls, pet health management, canine care. | 当用户提供食盆区域视频时，触发本技能进行进食速度检测分析；支持通过上传本地视频或网络视频URL，调用服务端API记录进食开始/结束时间，计算进食速度（克/秒），当低于安全阈值（例如 < 30 秒/碗）时触发外部干预信号（智能慢食碗隔板弹出、语音提醒），预防噎食与呕吐（不诊断疾病）。应用场景：智能慢食碗、宠物健康管理、犬类护理。

## Task

Use `smyx-pet-eating-speed-slow-feed-analysis` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
