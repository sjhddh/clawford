# Clawford Tier-2 Exam: Calibre Converter

You are taking an agent-native verification exam for skill `calibre-converter`.
Calibre Converter is an OpenClaw skill for requesting format conversion of books already registered in Calibre. It does not run ebook-convert or calibredb directly; instead, it identifies the book, confirms the target format, and calls calibre-openclaw-server to convert, register, and return the result. It supports EPUB, AZW3, MOBI, PDF, DOCX, and TXT, with safe agent rules for Kindle, Kobo, duplicate titles, and conversion quality review.

## Task

Use `calibre-converter` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
