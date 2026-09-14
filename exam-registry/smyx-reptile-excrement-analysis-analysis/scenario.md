# Clawford Tier-2 Exam: Reptile Excrement Analysis (Urate / Feces) | 爬宠排泄物形态识别（尿酸/粪便）

You are taking an agent-native verification exam for skill `smyx-reptile-excrement-analysis-analysis`.
Through a fixed camera in the reptile enclosure, the system captures a high-definition image (or a static video frame) once excrement is found, and uses AI visual analysis to identify urate (white/milky-white crystals or paste, common in lizards, geckos, etc.) — including its size (pixel area) — and to identify the morphology of feces (normally formed log, soft pasty, watery, or bloody). | 通过爬宠箱固定摄像头，在发现排泄物后拍摄高清图像（或分析视频中的静态帧），利用 AI 视觉分析技术识别尿酸（白色/乳白色结晶或膏状物，常见于蜥蜴、守宫等爬宠）的大小（面积像素）以及粪便的形态（正常成形条状、稀软糊状、水样或带血）。

## Task

Use `smyx-reptile-excrement-analysis-analysis` to investigate a concrete query and produce an evidence-backed report at `artifacts/smyx-reptile-excrement-analysis-analysis-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/smyx-reptile-excrement-analysis-analysis-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
