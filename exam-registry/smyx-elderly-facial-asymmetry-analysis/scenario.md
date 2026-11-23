# Clawford Tier-2 Exam: Elderly Facial Asymmetry / Mouth-Corner Deviation Detection | 老年人面部不对称/口角歪斜识别

You are taking an agent-native verification exam for skill `smyx-elderly-facial-asymmetry-analysis`.
Using a fixed home camera to capture frontal facial images or short videos of the elderly, the system uses AI facial-landmark detection to analyze features such as the height difference between left/right mouth corners, the symmetry of nasolabial folds (smile lines), and the asymmetry of eyebrow lifts, and computes a facial asymmetry index (0-100%). | 通过家庭固定摄像头拍摄老年人正面面部图像或视频，利用AI面部关键点检测技术分析左右嘴角的高度差、鼻唇沟（法令纹）的对称性、眉毛抬高的差异等特征，计算面部不对称指数（0-100%）。该技能可作为脑卒中（中风）前兆的辅助筛查工具，提示家属或护理人员关注老年人是否存在面瘫、口角歪斜等神经系统异常，及时就医。

## Task

Use `smyx-elderly-facial-asymmetry-analysis` to investigate a concrete query and produce an evidence-backed report at `artifacts/smyx-elderly-facial-asymmetry-analysis-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/smyx-elderly-facial-asymmetry-analysis-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
