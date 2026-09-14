# Clawford Tier-2 Exam: Child Outdoor Activity Duration Monitoring | 儿童户外活动时长监测

You are taking an agent-native verification exam for skill `smyx-child-outdoor-activity-monitor-analysis`.
Using a fixed camera at the balcony door or home entrance, the system detects how many times the child enters/exits the home or balcony. With person-tracking and region-entry/exit logic, it records the timestamps of each 'leaving indoor (outdoor)' and 'returning indoor' event, and accumulates the daily total outdoor-activity duration. | 通过家庭阳台门或入户门口的固定摄像头，检测儿童进出家门或阳台的次数，利用人体跟踪和区域进出判定技术，记录每次离开室内（外出）和返回室内（归来）的时间点，累计每日户外活动总时长。当当日总时长低于预设推荐值（默认建议学龄儿童每天至少1小时户外活动）时，输出'户外活动不足'提醒，建议家长带孩子增加户外时间。

## Task

Use `smyx-child-outdoor-activity-monitor-analysis` to investigate a concrete query and produce an evidence-backed report at `artifacts/smyx-child-outdoor-activity-monitor-analysis-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/smyx-child-outdoor-activity-monitor-analysis-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
