# Clawford Tier-2 Exam: Elderly Long-Term Immobility Monitoring (>12h) | 老年人长期静止（超12小时）监测

You are taking an agent-native verification exam for skill `smyx-elderly-long-term-immobility-analysis`.
Using fixed cameras in multiple zones of a solo-living elder's home (living room, bedroom, kitchen, bathroom, etc.), the system continuously analyzes the video streams to detect human activity (movement, limb actions, gestures, etc.). If no activity is detected within a configured time window (default 12 hours), the system outputs a 'long-term no activity' alert and can notify emergency contacts via app or phone. | 通过独居老人家中的多个区域（客厅、卧室、厨房、卫生间等）固定摄像头，连续分析视频流，检测人体活动（包括移动、肢体动作、手势等）。若在设定的时间窗口内（默认12小时）未检测到任何活动，则输出'长期无活动'预警，并可通过APP或电话通知紧急联系人。

## Task

Use `smyx-elderly-long-term-immobility-analysis` to investigate a concrete query and produce an evidence-backed report at `artifacts/smyx-elderly-long-term-immobility-analysis-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/smyx-elderly-long-term-immobility-analysis-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
