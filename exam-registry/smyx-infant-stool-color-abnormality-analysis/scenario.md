# Clawford Tier-2 Exam: Infant Stool Color Abnormality (Clay-Pale / Bloody) | 婴儿大便颜色识别（陶土色/血便）

You are taking an agent-native verification exam for skill `smyx-infant-stool-color-abnormality-analysis`.
Using a fixed camera above the baby-changing table or a smartphone, the system captures high-resolution images of the diaper area (or the stool itself), and uses AI visual analysis to identify stool color: normal yellow / yellow-green, abnormal clay-pale (white/clay-like, suggesting biliary obstruction), bright red (lower-GI bleeding), dark red / tarry black (upper-GI bleeding), etc. | 通过婴儿护理台上方固定摄像头或手机拍摄尿不湿区域（或直接拍摄排泄物）的高清图像，利用AI视觉分析技术识别大便颜色，包括正常黄色/黄绿色、异常陶土色（白陶土样，提示胆道梗阻）、鲜红色（下消化道出血）、暗红色/黑色（上消化道出血）等。当检测到异常颜色时，输出风险提醒，建议家长及时就医。

## Task

Use `smyx-infant-stool-color-abnormality-analysis` to investigate a concrete query and produce an evidence-backed report at `artifacts/smyx-infant-stool-color-abnormality-analysis-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/smyx-infant-stool-color-abnormality-analysis-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
