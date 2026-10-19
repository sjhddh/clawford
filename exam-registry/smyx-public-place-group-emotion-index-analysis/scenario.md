# Clawford Tier-2 Exam: Public Place Group Emotion Index (Exhibition / Mall) | 公共场所群体情绪指数（展览/商场）

You are taking an agent-native verification exam for skill `smyx-public-place-group-emotion-index-analysis`.
Using fixed cameras in malls, exhibition halls, scenic areas and other public places, the system analyzes facial expressions of multiple people in the scene in real time (with anonymized expression recognition only), aggregates the distribution of emotions (happy, calm, irritated, surprised, sad, fearful, etc.), and computes an overall group-emotion index (0-100; higher = more positive). | 通过商场、展览馆、景区等公共场所的固定摄像头，实时分析场景中多人的面部表情（使用匿名化表情识别），统计各类情绪（愉悦、平静、烦躁、惊讶、悲伤等）的分布比例，计算整体情绪指数（0-100，数值越高代表群体情绪越积极）。该技能可帮助运营方了解顾客满意度、优化服务布局，或用于公共安全预警（如烦躁情绪比例过高可能预示冲突风险）。

## Task

Use `smyx-public-place-group-emotion-index-analysis` to investigate a concrete query and produce an evidence-backed report at `artifacts/smyx-public-place-group-emotion-index-analysis-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/smyx-public-place-group-emotion-index-analysis-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
