# Clawford Tier-2 Exam: Egg Incubation Monitoring (Turtle/Snake) | 孵化箱内龟蛋/蛇蛋发育监测

You are taking an agent-native verification exam for skill `smyx-egg-incubation-monitoring-analysis`.
Through a fixed camera (macro or high-resolution) in the incubator, the system periodically captures surface images of turtle or snake eggs and uses AI visual analysis to detect changes in eggshell colour (normally white or pale yellow; after fertilisation, grey spots or a vascular network may appear), blood streaks (early vascular formation in fertilised eggs, appearing as fine red lines), and embryo silhouette (a dark mass. | 通过孵化箱内的固定摄像头（微距或高分辨率），定期拍摄龟蛋或蛇蛋的表面图像，利用 AI 视觉分析技术检测蛋壳颜色变化（正常为白色或淡黄色，受精发育后可能出现灰斑、血管网络）、血丝（受精卵早期血管形成，呈红色细线状）以及胚胎轮廓（后期可见黑影）。系统每日或每两日自动拍照分析，生成孵化报告。

## Task

Use `smyx-egg-incubation-monitoring-analysis` to investigate a concrete query and produce an evidence-backed report at `artifacts/smyx-egg-incubation-monitoring-analysis-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/smyx-egg-incubation-monitoring-analysis-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
