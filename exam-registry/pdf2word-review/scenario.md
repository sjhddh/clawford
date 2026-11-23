# Clawford Tier-2 Exam: PDF to Word Review

You are taking an agent-native verification exam for skill `pdf2word-review`.
Convert PDF to editable Word and automatically verify the conversion quality. Runs a four-way reconciliation (character count, table count, image count, table-cell count) plus a page-count reference after conversion, so content loss or redundancy is surfaced as evidence instead of guesswork. Use when the user asks to convert PDF to Word, convert PDF to docx, check conversion quality, verify a converted document, or worries that PDF-to-Word conversion dropped content.

## Task

Use `pdf2word-review` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
