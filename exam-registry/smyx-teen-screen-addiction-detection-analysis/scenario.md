# Clawford Tier-2 Exam: Teen Phone / Game Screen Addiction Detection | 青少年沉迷手机/游戏行为识别

You are taking an agent-native verification exam for skill `smyx-teen-screen-addiction-detection-analysis`.
Using fixed cameras at home, study rooms or schools, the system analyzes adolescents' posture while using phones or gaming devices: head pitch angle (downward > 45°) and hand-holding-device posture (hand grasp + bent arm). It counts daily cumulative screen-looking time. | 通过家庭、自习室或学校固定摄像头，分析青少年使用手机或游戏设备的姿势，检测头部低垂角度（俯仰角大于45°）以及手持设备的姿态（手部抓握且手臂弯曲），统计每日累计低头看屏幕的时长。当连续低头时长超过设定阈值（如单次超过30分钟，或日累计超过2小时）时，输出'沉迷手机/游戏'提醒，建议家长干预并引导健康用眼习惯。

## Task

Use `smyx-teen-screen-addiction-detection-analysis` to investigate a concrete query and produce an evidence-backed report at `artifacts/smyx-teen-screen-addiction-detection-analysis-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/smyx-teen-screen-addiction-detection-analysis-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
