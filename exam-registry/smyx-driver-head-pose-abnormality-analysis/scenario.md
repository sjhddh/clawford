# Clawford Tier-2 Exam: Driver Head-Pose Abnormality (Head-Down / Side-View) | 驾驶员头部姿态异常（低头/侧视）检测

You are taking an agent-native verification exam for skill `smyx-driver-head-pose-abnormality-analysis`.
Using an in-cabin DMS camera, the system analyzes the driver's head pose in real time, computing head pitch (down/up) and yaw (left/right turn). | 通过车载DMS摄像头实时分析驾驶员头部姿态，计算头部俯仰角（低头/抬头）和偏航角（左/右转头）。当低头角度超过阈值（默认>30°）且持续时间超过2秒（可能为看手机、查看物品），或侧视角度超过阈值（默认>45°）持续时间超过2秒（可能为与乘客聊天、看窗外）时，输出分心驾驶预警，联动语音提醒，预防交通事故。

## Task

Use `smyx-driver-head-pose-abnormality-analysis` to investigate a concrete query and produce an evidence-backed report at `artifacts/smyx-driver-head-pose-abnormality-analysis-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/smyx-driver-head-pose-abnormality-analysis-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
