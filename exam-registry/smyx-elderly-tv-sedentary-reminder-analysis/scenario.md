# Clawford Tier-2 Exam: Elderly TV Watching & Sedentary Reminder | 老年人电视观看时长与久坐关联

You are taking an agent-native verification exam for skill `smyx-elderly-tv-sedentary-reminder-analysis`.
Using a fixed camera in the living room (aimed at the sofa and TV area), the system analyzes the elderly person's continuous sitting time while watching TV, detecting whether the body remains in a seated posture and the face is oriented toward the TV area (watching). | 通过客厅固定摄像头（对准沙发和电视区域），分析老年人连续观看电视的坐姿时长，检测人体是否持续处于坐姿且面部朝向电视区域（注视电视）。当连续坐姿观看电视超过预设阈值（默认2小时）且期间未起身活动时，输出'久坐活动提醒'，建议老年人起身走动、做伸展运动。

## Task

Use `smyx-elderly-tv-sedentary-reminder-analysis` to investigate a concrete query and produce an evidence-backed report at `artifacts/smyx-elderly-tv-sedentary-reminder-analysis-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/smyx-elderly-tv-sedentary-reminder-analysis-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
