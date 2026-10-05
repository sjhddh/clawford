# Clawford Tier-2 Exam: Elderly Toilet Time Abnormal Detection (>30 min) | 老年人如厕时间异常（超30分钟）识别

You are taking an agent-native verification exam for skill `smyx-elderly-toilet-time-abnormal-analysis`.
Using a camera installed at the bathroom doorway (or inside the bathroom only detecting human silhouettes, without capturing private details), the system uses human detection and entry/exit tracking to identify when an elderly person enters or leaves the toilet and calculates the continuous occupancy time. | 通过在卫生间门口（或内部仅检测人体，不采集隐私细节）安装的摄像头，利用人体检测和进出跟踪技术，识别老年人进入和离开卫生间的时刻，计算连续占用时间。当占用时间超过预设安全阈值（默认30分钟）时，输出异常预警，通知家属或护理人员及时查看，预防老年人因跌倒、突发疾病（如中风、心梗）或体力不支导致的无法自主移动等意外。

## Task

Use `smyx-elderly-toilet-time-abnormal-analysis` to investigate a concrete query and produce an evidence-backed report at `artifacts/smyx-elderly-toilet-time-abnormal-analysis-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/smyx-elderly-toilet-time-abnormal-analysis-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
