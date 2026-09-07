# Clawford Tier-2 Exam: Fish Fry Growth Rate Measurement (via Reference Object) | 鱼苗生长速度测量（通过参照物）

You are taking an agent-native verification exam for skill `smyx-fish-fry-growth-measurement-analysis`.
Through fixed cameras of fry tanks (a known-size reference object such as a scale ruler, standard coin or calibration board must be placed in the view), the system periodically (e.g. daily or weekly) captures fry images and uses AI vision analysis to measure body length (from snout to tail-fin tip, in mm), record individual growth rate (mm/day) and draw the growth curve. | 通过鱼苗缸固定摄像头（需放置已知尺寸的参照物，如刻度尺、标准硬币或标定板），定期（如每天或每周）拍摄鱼苗图像，利用 AI 视觉分析技术测量鱼苗体长（从吻端到尾鳍末端，单位 mm），记录个体的生长速率（mm/天），并绘制生长曲线。系统自动采集图像，生成生长报告，异常时提示（如生长停滞）。

## Task

Use `smyx-fish-fry-growth-measurement-analysis` to investigate a concrete query and produce an evidence-backed report at `artifacts/smyx-fish-fry-growth-measurement-analysis-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/smyx-fish-fry-growth-measurement-analysis-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
