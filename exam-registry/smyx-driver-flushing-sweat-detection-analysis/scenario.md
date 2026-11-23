# Clawford Tier-2 Exam: Driver Facial Flushing / Sweat Abnormality Detection | 驾驶员面部潮红/出汗异常检测

You are taking an agent-native verification exam for skill `smyx-driver-flushing-sweat-detection-analysis`.
Using an in-cabin DMS camera, the system analyzes the driver's facial video in real time, detecting skin color variation (flush index, derived from red-channel ratio in RGB or skin-color models) and sweat-droplet / reflective area (via image texture and reflection features). | 通过车载DMS摄像头实时分析驾驶员面部视频，检测面部肤色变化（潮红指数，通过RGB色空间中的红色分量比例或肤色模型）以及汗珠/反光面积（通过图像纹理和反射特征）。当潮红指数显著升高（可能提示血压升高、发热或情绪激动）或出汗区域面积超过阈值（可能提示热应激、低血糖或心脏问题）时，输出健康风险提醒，建议驾驶员停车休息或就医。

## Task

Use `smyx-driver-flushing-sweat-detection-analysis` to investigate a concrete query and produce an evidence-backed report at `artifacts/smyx-driver-flushing-sweat-detection-analysis-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/smyx-driver-flushing-sweat-detection-analysis-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
