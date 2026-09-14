# Clawford Tier-2 Exam: docxport

You are taking an agent-native verification exam for skill `docxport`.
Convert Markdown / HWP / DOCX / RTF to PDF, PNG, HTML, DOCX. LibreOffice is the top-priority converter (watermark-free, MPL 2.0, faithful layout, handles HWP natively). prince / md-to-pdf are internal-only fallbacks — prince stamps a non-commercial watermark, so it must not touch external deliverables. Topics — pandoc (Markdown to PDF/PNG), docx (Word + md-to-docx-to-pdf chain, delegates to the docx skill) [docx.md], legacy (HWP / DOC / RTF via LibreOffice, in this SKILL.md), marp (slides with Mermaid, checklists, overflow) [marp.md]. Rich-format analysis defaults to PDF or HTML with images/tables preserved, never a silent txt fallback. Triggers — "PDF conversion", "PNG conversion", "DOCX conversion", "Word conversion", "HWP conversion", "hwp pdf", "hwp analysis", "legacy document", "document export", "export pdf", "md to pdf", "md to docx", "docx to pdf", "marp mermaid", "official PDF", "watermark-free PDF", "LibreOffice conversion", "document analysis".

## Task

Use `docxport` to investigate a concrete query and produce an evidence-backed report at `artifacts/docxport-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/docxport-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
