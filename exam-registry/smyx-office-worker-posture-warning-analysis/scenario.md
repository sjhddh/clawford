# Clawford Tier-2 Exam: Office Prolonged Sitting & Posture Warning | 成人久坐/姿态预警（办公室）

You are taking an agent-native verification exam for skill `smyx-office-worker-posture-warning-analysis`.
Using a fixed camera in the office (aimed at the workstation), the system analyzes office workers' sitting-posture video in real time, detecting continuous sitting duration, neck forward angle (head offset relative to shoulders), and back curvature (hunchback degree). | 通过办公区固定摄像头（对准工位）实时分析办公人员的坐姿视频，检测连续坐姿时间、颈部前倾角度（头部相对于肩部的偏移）、背部弯曲度（驼背程度）。当久坐时间超过预设阈值（默认1小时）且未起身活动时，输出'久坐提醒'；当颈部前倾角>20°或背部弯曲超过阈值时，输出'姿态异常提醒'。

## Task

Use `smyx-office-worker-posture-warning-analysis` to investigate a concrete query and produce an evidence-backed report at `artifacts/smyx-office-worker-posture-warning-analysis-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/smyx-office-worker-posture-warning-analysis-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
