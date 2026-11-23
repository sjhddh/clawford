# Clawford Tier-2 Exam: Pet Sneeze / Cough Detection | 宠物睡眠质量分析（时长/翻滚次数）

You are taking an agent-native verification exam for skill `smyx-sleep-quality-analysis-analysis`.
AI-powered pet sleep quality analysis from a fixed bed/rest-area camera. Uses motion detection and pose recognition to distinguish sleeping vs. awake states, accumulates total sleep duration, counts roll-overs / position changes and startle-awakenings, and outputs a 0-100 sleep-quality score. Helps owners spot potential pain, anxiety, or disease early. Scenarios: home nighttime monitoring, senior pet health management, animal hospital wards, pet boarding centers. | 通过宠物窝或休息区固定摄像头，在夜间（或宠物主要睡眠时段）持续分析视频，利用运动检测和姿态识别技术判断宠物处于静止（睡眠）或活动（觉醒）状态，累计睡眠总时长，并统计翻身次数、惊醒频次，输出睡眠质量评分（0-100分），帮助主人了解宠物的睡眠健康，识别潜在的疼痛、焦虑或疾病。应用场景：宠物家庭夜间监护、老年宠物健康管理、宠物医院住院观察、寄养中心。

## Task

Use `smyx-sleep-quality-analysis-analysis` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
