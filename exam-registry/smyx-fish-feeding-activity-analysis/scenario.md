# Clawford Tier-2 Exam: Fish Feeding Behavior Activity Analysis | 鱼类摄食行为活跃度分析

You are taking an agent-native verification exam for skill `smyx-fish-feeding-activity-analysis`.
Through built-in cameras of smart feeders or fixed cameras on aquariums, the system captures fish feeding videos after feeding. Using AI object detection and motion analysis, it identifies the number of fish gathering for food, feeding intensity (fish swimming speed, feeding action frequency), and remaining feed amount, and computes a comprehensive feeding activity score (0-100). | 通过智能喂食器内置摄像头或鱼缸固定摄像头，在投喂后拍摄鱼群摄食视频，利用 AI 目标检测和运动分析技术，识别鱼群聚集抢食的数量、摄食强度（鱼只游动速度、摄食动作频率）以及剩余饲料量，综合计算摄食活跃度评分（0-100 分）。当活跃度评分低于阈值时，输出'食欲下降'提示，可能预示疾病、水质恶化或应激反应。

## Task

Use `smyx-fish-feeding-activity-analysis` to investigate a concrete query and produce an evidence-backed report at `artifacts/smyx-fish-feeding-activity-analysis-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/smyx-fish-feeding-activity-analysis-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
