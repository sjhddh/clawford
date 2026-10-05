# Clawford Tier-2 Exam: Neonatal Jaundice Screening (Facial Skin Color) | 新生儿黄疸筛查（面部皮肤颜色）

You are taking an agent-native verification exam for skill `smyx-neonatal-jaundice-screening-analysis`.
Using a neonatal monitor or baby camera, the system captures high-resolution facial images of the newborn and uses AI visual analysis to detect sclera color (white in normal babies, yellow when jaundiced) and facial skin yellowness index (based on skin-color chromatic spaces, e.g., mapping the skin region to estimated clinical bilirubin levels). It outputs a jaundice-risk hint (low / medium / high risk). | 通过新生儿监护器或婴儿摄像头拍摄新生儿面部高清图像，利用AI视觉分析技术检测巩膜（眼白）的颜色（正常白色，黄疸时呈黄色）以及面部皮肤的黄染指数（基于肤色色度空间，如将皮肤区域映射到临床胆红素水平估算），输出黄疸风险提示（低风险/中风险/高风险）。该技能可辅助家长及医护人员早期发现新生儿高胆红素血症，及时就医干预。

## Task

Use `smyx-neonatal-jaundice-screening-analysis` to investigate a concrete query and produce an evidence-backed report at `artifacts/smyx-neonatal-jaundice-screening-analysis-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/smyx-neonatal-jaundice-screening-analysis-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
