# Clawford Tier-2 Exam: Elderly Drinking-Cup Pickup Frequency (Dehydration Risk) | 老年人饮水杯拿起频率（脱水风险）

You are taking an agent-native verification exam for skill `smyx-elderly-drinking-frequency-analysis`.
Using a fixed camera in the living room or kitchen, the system analyzes video of the water-cup placement area (e.g., coffee table, dining table), detects hand-to-cup contact actions (pickup, putdown), and counts daily cup-pickup events (an indirect proxy for water intake). | 通过客厅或厨房固定摄像头，分析水杯放置区域（如茶几、餐桌）的视频，检测手部与水杯的接触动作（拿起、放下），统计每日水杯拿起次数（间接反映饮水量）。当每日拿起次数低于预设阈值（如每天少于6次）时，输出'脱水风险'提醒，建议家属或护理人员督促老人增加饮水。

## Task

Use `smyx-elderly-drinking-frequency-analysis` to investigate a concrete query and produce an evidence-backed report at `artifacts/smyx-elderly-drinking-frequency-analysis-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/smyx-elderly-drinking-frequency-analysis-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
