# Clawford Tier-2 Exam: Child Poor Posture (Hunchback / Head Tilt) Real-Time Reminder | 儿童坐姿不良（驼背/歪头）实时提醒

You are taking an agent-native verification exam for skill `smyx-child-poor-posture-detection-analysis`.
Using the camera built into a smart desk lamp or mounted above the desk, the system analyzes the child's sitting-posture video in real time, detecting spinal curvature angle (estimated Cobb angle) and head tilt angle. | 通过智能台灯内置摄像头或书桌上方摄像头，实时分析儿童学习时的坐姿视频，检测脊柱弯曲角度（Cobb角估算）以及头部倾斜度（侧倾角）。当驼背（Cobb角>10°）或歪头（头部侧倾角>15°）持续时间超过预设阈值（如5秒）时，触发语音提醒（如'请坐直'、'头抬正'），帮助儿童养成良好坐姿习惯，预防近视和脊柱侧弯。

## Task

Use `smyx-child-poor-posture-detection-analysis` to investigate a concrete query and produce an evidence-backed report at `artifacts/smyx-child-poor-posture-detection-analysis-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/smyx-child-poor-posture-detection-analysis-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
