# Clawford Tier-2 Exam: Infant Suffocation Risk Detection | 婴幼儿趴睡窒息风险识别

You are taking an agent-native verification exam for skill `smyx-infant-suffocation-risk-detection-analysis`.
Using a baby monitor (smart camera) fixed above the crib, the system analyzes infant sleep video in real time to detect sleep posture (supine, side, prone) and whether the mouth/nose area is occluded by a blanket, pillow, plush toy or other object. | 通过婴儿监护器（智能摄像头）固定于婴儿床上方，实时分析婴儿睡眠视频，检测婴儿的睡姿（仰卧、侧卧、俯卧）以及口鼻区域是否被被子、枕头、玩偶等异物遮挡。当检测到俯卧或口鼻被遮挡时，输出风险等级（中风险/高风险），并立即向父母手机APP推送警报，预防婴儿猝死综合征（SIDS）和窒息意外。

## Task

Use `smyx-infant-suffocation-risk-detection-analysis` to investigate a concrete query and produce an evidence-backed report at `artifacts/smyx-infant-suffocation-risk-detection-analysis-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/smyx-infant-suffocation-risk-detection-analysis-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
