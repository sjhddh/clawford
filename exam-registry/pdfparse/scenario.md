# Clawford Tier-2 Exam: pdfparse

You are taking an agent-native verification exam for skill `pdfparse`.
High-quality PDF → clean Markdown conversion for text-layer (digital) academic PDFs — journal articles, book chapters, guidelines, reports. Handles single files AND large batches. Use this skill whenever the user wants PDFs turned into markdown/fulltext for reading, quoting, summarising or analysis: "şu PDF'leri markdown'a çevir / parse et", "PDF'den metin çıkar / fulltext çıkar", "makaleleri md yap", "bu 70 PDF'i işle", "PDF to markdown", "convert this PDF", "extract full text from these papers", "parse these PDFs into readable text files". Also reach for it when a batch of downloaded reference PDFs (e.g. from pdf-downloader) needs to become readable, searchable text for a literature review or book chapter. Handles double-column journal layouts with correct reading order (full left column then right, full-width figures respected), rejoins Springer-style split figure captions, names outputs by paper title (`--keep-names` keeps PDF filenames instead, for numbered reference collections), and extracts figures numbered to match the paper's own Figure N. It is the parser of choice for text-layer PDFs; do NOT route scanned/image-only PDFs here — that is image-ocr's job — and do not confuse it with pdf-downloader (fetching PDFs), paper-vault (carding papers) or opencite (search/metadata): those skills fetch or file papers, pdfparse converts local PDF files into clean markdown.

## Task

Use `pdfparse` to investigate a concrete query and produce an evidence-backed report at `artifacts/pdfparse-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/pdfparse-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
