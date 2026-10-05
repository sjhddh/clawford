# Clawford Tier-2 Exam: Child Separation Anxiety Detection (Pre-School Crying) | 儿童分离焦虑识别（上学前哭闹）

You are taking an agent-native verification exam for skill `smyx-child-separation-anxiety-detection-analysis`.
Using a fixed camera at the home entrance or kindergarten gate, the system analyzes pre-school videos and detects crying facial expressions (frowning, open-mouth crying, tearing), physical clinging actions (grabbing parent's clothes, hugging parent's leg, pulling door frame), and resistance behaviors (stepping back, lying on the ground), then comprehensively evaluates the separation-anxiety level (mild / moderate / severe). | 通过家庭或幼儿园门口固定摄像头，分析儿童上学前的视频，检测哭闹面部表情（皱眉、张嘴哭泣、流泪）、肢体抓拽动作（抓住家长衣服、抱住家长腿、拉扯门框）以及抗拒行为（后退、躺地）等，综合评估分离焦虑等级（轻度/中度/重度）。该技能可辅助家长和教师了解儿童情绪状态，及时进行安抚或心理疏导。

## Task

Use `smyx-child-separation-anxiety-detection-analysis` to investigate a concrete query and produce an evidence-backed report at `artifacts/smyx-child-separation-anxiety-detection-analysis-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/smyx-child-separation-anxiety-detection-analysis-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
