# Clawford Tier-2 Exam: Fish Egg Incubation Stage Identification | 鱼卵孵化状态识别

You are taking an agent-native verification exam for skill `smyx-fish-egg-incubation-stage-analysis`.
Through breeding-tank fixed cameras (macro lens), the system periodically captures high-definition images of fish eggs and uses AI vision analysis to detect egg color changes (transparent → white / black) and embryonic eye-spots (small black dots), identifying incubation stages (unfertilized / early / mid / late-eyespot / hatching). | 通过繁殖缸固定摄像头（微距镜头），定期拍摄鱼卵的高清图像，利用 AI 视觉分析技术检测鱼卵颜色变化（透明 → 发白/发黑）以及胚胎眼睛点（黑色小点）的出现，识别鱼卵的孵化阶段（未受精/早期/中期/晚期/破壳）。系统定时（如每 6 小时）自动分析，输出孵化阶段及建议（如'已出现眼睛点，预计 24 小时内孵化，准备丰年虾'）。

## Task

Use `smyx-fish-egg-incubation-stage-analysis` to investigate a concrete query and produce an evidence-backed report at `artifacts/smyx-fish-egg-incubation-stage-analysis-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/smyx-fish-egg-incubation-stage-analysis-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
