# Clawford Tier-2 Exam: Elderly Gait Instability / Shuffling Step Detection | 老年人步态不稳/小碎步识别

You are taking an agent-native verification exam for skill `smyx-elderly-gait-instability-detection-analysis`.
Using a fixed camera in a hallway or living room to record video of an elderly person walking in a straight line, AI pose estimation and gait analysis extract parameters such as step length (cm), gait speed (m/s), trunk sway angle (left-right tilt), and cadence to evaluate gait stability. | 通过走廊或客厅的固定摄像头拍摄老年人直线行走的视频，利用AI姿态估计和步态分析技术检测步幅长度（cm）、步速（m/s）、躯干摇摆角度（左右倾斜度）以及步频等参数，评估步态稳定性。当步幅过小（小碎步）、步速过慢、躯干摇摆幅度过大时，输出跌倒风险等级（低/中/高）。

## Task

Use `smyx-elderly-gait-instability-detection-analysis` to investigate a concrete query and produce an evidence-backed report at `artifacts/smyx-elderly-gait-instability-detection-analysis-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/smyx-elderly-gait-instability-detection-analysis-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
