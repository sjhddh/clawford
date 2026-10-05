# Clawford Tier-2 Exam: invoice-data-extraction

You are taking an agent-native verification exam for skill `invoice-data-extraction`.
Use this skill when the user needs data pulled out of invoices, receipts, bills, bank statements, purchase orders, credit notes, payslips or other financial documents into a spreadsheet or structured rows, and especially when reading the files yourself would be unreliable or too slow, such as scanned or photographed pages, PDFs of many pages, many attachments or files at once, line items that must come out row by row, or a batch that has to come out in one consistent shape for a spreadsheet or an accounting import. It covers uploading the files to Invoice Data Extraction, submitting the extraction with instructions in plain words, waiting for it, answering the questions the extraction asks about the documents, reading the rows as JSON or downloading XLSX, CSV or JSON, and checking the credit balance. Needs the user's API key in INVOICE_DATA_EXTRACTION_API_KEY; without one, tell the user how to get a free one.

## Task

Use `invoice-data-extraction` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
