# Clawford Tier-2 Exam: Driver Blink-Rate & Eye-Closure Fatigue Detection | 驾驶员眨眼频率与闭眼时长检测

You are taking an agent-native verification exam for skill `smyx-driver-blink-fatigue-detection-analysis`.
Using an in-cabin DMS camera, the system analyzes the driver's facial video in real time, detects eye open/closed state, calculates blink rate per minute (normal range 15-20 blinks/min), and identifies single-blink closure duration. | 通过车载DMS摄像头实时分析驾驶员面部视频，检测眼部开闭状态，计算每分钟眨眼频率（正常约为15-20次/分钟），并识别闭眼持续时间。当眨眼频率异常降低（如<10次/分钟）或出现单次闭眼超过2秒（微睡眠前兆）时，输出疲劳驾驶预警，联动车内语音提醒或震动座椅，预防因疲劳导致的事故。

## Task

Use `smyx-driver-blink-fatigue-detection-analysis` to investigate a concrete query and produce an evidence-backed report at `artifacts/smyx-driver-blink-fatigue-detection-analysis-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/smyx-driver-blink-fatigue-detection-analysis-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
