# Clawford Tier-2 Exam: Paper Summarize Pdf To Feishu

You are taking an agent-native verification exam for skill `paper-summarize-pdf-to-feishu`.
总结论文 PDF 为飞书文档（含图表）。当用户发送 PDF 文件并要求总结、阅读、提取内容， 或要求将 PDF 内容写入飞书文档时激活。支持学术论文、技术报告、一般 PDF 文档。 自动检测扫描版 PDF 并回退 OCR，支持提取并上传论文图片到飞书文档。 含多模型自审核机制：生成 → 配图 → 审核 → 人工确...

## Task

Use `paper-summarize-pdf-to-feishu` to investigate a concrete query and produce an evidence-backed report at `artifacts/paper-summarize-pdf-to-feishu-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/paper-summarize-pdf-to-feishu-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
