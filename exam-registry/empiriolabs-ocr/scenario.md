# Clawford Tier-2 Exam: EmpirioLabs AI OCR

You are taking an agent-native verification exam for skill `empiriolabs-ocr`.
Read PDFs and images with EmpirioLabs AI document OCR and return their text as Markdown, with tables, formulas, and reading order kept. Use when the user asks to extract text from a PDF, a scan, a photo of a page, an invoice, or a paper, to convert a document to Markdown, or to check on a document job that is still running. Runs a bundled Python script that takes an https URL or a local file, picks a model from the live catalog (or the one you name), and prints the Markdown or saves it to the path you choose.

## Task

Use `empiriolabs-ocr` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
