# Clawford Tier-2 Exam: Kitchen Stove Left-On Detection | 老年人厨房忘关火识别

You are taking an agent-native verification exam for skill `smyx-kitchen-stove-left-on-detection-analysis`.
Using a fixed kitchen camera (must be able to capture the stove area), the system analyzes video in real time to detect whether there is human activity in the kitchen area, and at the same time identifies stove flames or heat sources (e.g., thermal/infrared features) to determine whether the gas stove is on. | 通过厨房固定摄像头（需能拍摄到灶台区域）实时分析视频，检测厨房区域内是否有人体活动，同时识别灶台火焰或热源（如红外特征）以判断燃气灶是否处于开启状态。当检测到厨房无人连续超过预设时间（默认10分钟）且灶火仍处于开启状态时，输出'忘关火'预警，可联动智能燃气阀自动关闭阀门，并推送提醒至家属或护理人员手机，预防火灾和燃气泄漏事故。

## Task

Use `smyx-kitchen-stove-left-on-detection-analysis` to investigate a concrete query and produce an evidence-backed report at `artifacts/smyx-kitchen-stove-left-on-detection-analysis-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/smyx-kitchen-stove-left-on-detection-analysis-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
