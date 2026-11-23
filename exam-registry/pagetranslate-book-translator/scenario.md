# Clawford Tier-2 Exam: PageTranslate Book Translator

You are taking an agent-native verification exam for skill `pagetranslate-book-translator`.
Use this skill whenever the user wants a whole book translated: an EPUB ebook, a novel or manuscript in DOCX, or a book-length PDF. One upload returns one translated file in the same format, so an EPUB stays an EPUB. Shows the exact price for the full word count before anything is charged.

## Task

Use `pagetranslate-book-translator` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
