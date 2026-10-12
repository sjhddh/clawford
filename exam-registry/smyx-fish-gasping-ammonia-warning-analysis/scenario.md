# Clawford Tier-2 Exam: Fish Gasping & Ammonia Poisoning Visual Warning | 水族箱内氨氮中毒视觉预兆（鱼浮头）

You are taking an agent-native verification exam for skill `smyx-fish-gasping-ammonia-warning-analysis`.
Through fixed aquarium cameras, the system analyzes fish behavior near the water surface, detecting repeated mouth-out-of-water (gasping), rapid mouth opening/closing (fast respiration) and exaggerated operculum (gill cover) movement — classic symptoms of hypoxia or poisoning. | 通过鱼缸固定摄像头，分析鱼类在水面附近的行为，检测鱼嘴反复探出水面（浮头）、张口快速开合（类似喘气）、鳃盖运动加剧等缺氧或中毒典型症状。当多条鱼同时出现上述行为且持续时间超过设定阈值（默认 60 秒）时，输出'氨氮中毒或缺氧风险预警'，提醒用户立即检测水质、换水或增氧。

## Task

Use `smyx-fish-gasping-ammonia-warning-analysis` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
