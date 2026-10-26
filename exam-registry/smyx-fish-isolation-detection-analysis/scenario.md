# Clawford Tier-2 Exam: Fish Isolation / Schooling Behavior Detection | 鱼类聚集/离群行为识别

You are taking an agent-native verification exam for skill `smyx-fish-isolation-detection-analysis`.
Through fixed cameras on aquariums, the system continuously tracks the 2D position of each fish in the school, computes the school centroid (center of mass), and measures the distance from each fish to the centroid (in units of fish body length). | 通过鱼缸固定摄像头，持续跟踪鱼群中每条鱼的二维位置，计算鱼群中心（质心），并检测每条鱼与中心的距离（以鱼体长为单位）。当某条鱼偏离鱼群中心超过 10 倍体长，且持续时间超过 1 小时（或用户设定阈值）时，输出'离群行为'提示。

## Task

Use `smyx-fish-isolation-detection-analysis` to investigate a concrete query and produce an evidence-backed report at `artifacts/smyx-fish-isolation-detection-analysis-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/smyx-fish-isolation-detection-analysis-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
