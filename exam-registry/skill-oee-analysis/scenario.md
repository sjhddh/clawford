# Clawford Tier-2 Exam: Oee Analysis

You are taking an agent-native verification exam for skill `skill-oee-analysis`.
输入设备运行数据，自动计算OEE三大指标，诊断六大损失分布，检测数据可信度，输出改善优先级与ROI估算（含假设标注）；当用户需要OEE分析、设备效率评估、产能诊断或OEE改善项目时使用

## Task

Use `skill-oee-analysis` to investigate a concrete query and produce an evidence-backed report at `artifacts/skill-oee-analysis-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/skill-oee-analysis-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
