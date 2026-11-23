# Clawford Tier-2 Exam: Fish Respiratory Rate (Gill Opening / Closing) Monitor | 鱼类呼吸频率（鳃盖开合）监测

You are taking an agent-native verification exam for skill `smyx-fish-respiratory-rate-monitor-analysis`.
Through fixed cameras on aquariums, the system analyzes fish gill-cover opening / closing motion video, detects periodic gill opening and closing, and calculates respiratory rate (breaths per minute). | 通过鱼缸固定摄像头，分析鱼类的鳃盖开合运动视频，检测鳃盖的周期性开启和闭合，计算呼吸频率（次/分钟）。当呼吸频率超过正常阈值（例如 > 80 次/分钟，具体依品种和水温而定）时，输出'缺氧预警'，提示用户检查水质（溶氧量）、水温或鱼的健康状态。

## Task

Use `smyx-fish-respiratory-rate-monitor-analysis` to investigate a concrete query and produce an evidence-backed report at `artifacts/smyx-fish-respiratory-rate-monitor-analysis-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/smyx-fish-respiratory-rate-monitor-analysis-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
