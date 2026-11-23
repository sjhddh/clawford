# Clawford Tier-2 Exam: docspring-word-templates

You are taking an agent-native verification exam for skill `docspring-word-templates`.
Creates and fixes DocSpring Word templates, Word documents (.docx) with Liquid tags that DocSpring fills in with submission data to make Word documents or PDFs. Covers tags (values, filters, conditions, loops over table rows, pictures, signatures, barcodes), the fields DocSpring adds from them, replacing the document, previews and output formats. Use when the user wants to turn a Word document into a DocSpring template, add or fix its tags, find out why a Word template's submission failed, or get Word documents or PDFs from one, or when a project has template_type "docx", output_format, tpl_ IDs or a docspring package. Not for Word files DocSpring doesn't fill in (use a general Word skill), HTML templates (docspring-html-templates), PDF templates (docspring-pdf-templates) or app code that calls the API (docspring-api-integration).

## Task

Use `docspring-word-templates` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
