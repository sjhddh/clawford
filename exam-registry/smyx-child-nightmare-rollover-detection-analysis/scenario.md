# Clawford Tier-2 Exam: Child Restless Sleep / Nightmare Detection | 儿童睡眠中频繁翻身/噩梦识别

You are taking an agent-native verification exam for skill `smyx-child-nightmare-rollover-detection-analysis`.
Using a fixed camera in the child's bedroom (infrared night vision), the system continuously captures video and audio at night to analyze the child's sleep behavior. It detects rollover frequency (rollovers per minute), cries (recognizing specific cry-sound features), and sleep talk (speech during sleep), and generates a sleep-quality report. When rollovers occur too often (e.g., > 3 per hour), strong crying is detected, or sleep talk is observed, the system pushes 'possible nightmare' or 'restless sleep' alerts to the parents. Application scenarios: child bedrooms, infant rooms. The system relays night-time monitoring to help parents understand the child's sleep quality and provide timely comfort. Skill features: improve sleep. | 通过儿童床或卧室的固定摄像头（红外夜视），在夜间连续采集视频及音频，分析儿童的睡眠行为。检测翻身次数（每分钟翻身频率）、哭声（识别特定的哭声音频特征）以及梦话（检测睡眠中的语音），生成睡眠质量报告。当翻身过于频繁（如>3次/小时）、出现强烈哭声或梦话时，推送给父母'可能做噩梦'或'睡眠不安'的预警。应用场景：儿童卧室、婴儿房。系统夜间接力监测，帮助家长了解儿童睡眠质量，及时安抚。技能特点：改善睡眠。

## Task

Use `smyx-child-nightmare-rollover-detection-analysis` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
