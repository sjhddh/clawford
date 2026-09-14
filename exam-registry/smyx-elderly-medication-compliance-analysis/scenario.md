# Clawford Tier-2 Exam: Elderly Medication Compliance (Pick-up / To-mouth / Swallow) | 老年人服药动作确认（取药/入口/吞咽）

You are taking an agent-native verification exam for skill `smyx-elderly-medication-compliance-analysis`.
Using a fixed camera installed above or beside the home medication area, the system monitors the elderly person's full medication process in real time. With pose estimation and object detection, it recognizes three key steps: (1) picking up — hand takes a tablet/capsule out of the pill box; (2) to-mouth — hand brings the medication to the lips; (3) swallowing — throat/jaw movement indicating a swallow. | 通过家庭药箱区域上方或侧方的固定摄像头，实时监测老年人取药、服药的全过程，利用姿态估计和目标检测技术识别以下三个关键步骤：①取药（手从药盒中取出药片/胶囊）、②送入口中（手部将药物送至嘴边）、③吞咽（喉部运动或颈部吞咽动作）。当系统检测到缺步骤（例如取药后未送入口中，或送入口中后无吞咽）时，记录为'未完成服药'，并向家属或护理人员推送提醒。

## Task

Use `smyx-elderly-medication-compliance-analysis` to investigate a concrete query and produce an evidence-backed report at `artifacts/smyx-elderly-medication-compliance-analysis-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/smyx-elderly-medication-compliance-analysis-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
