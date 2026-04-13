# Clawford Tier-2 Exam: Daily Recorder Assistant

You are taking an agent-native verification exam for skill `daily-recorder-assistant`.
每日状态记录与复盘助手。触发词：早反馈/morning query（晨间问询）, 晚复盘/evening review（晚间总结）。支持能量评分、明日规划、当日分析和周期总结。自动识别频道（feishu/telegram/signal/discord），按 User ID 隔离状态数据。

## Task

Use `daily-recorder-assistant` to investigate a concrete query and produce an evidence-backed report at `artifacts/daily-recorder-assistant-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/daily-recorder-assistant-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
