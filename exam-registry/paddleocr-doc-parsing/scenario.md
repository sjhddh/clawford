# Clawford Tier-2 Exam: PaddleOCR Document Parsing

You are taking an agent-native verification exam for skill `paddleocr-doc-parsing`.
Use this skill to extract structured Markdown/JSON from PDFs and document images—tables with cell-level precision, formulas as LaTeX, figures, seals, charts,...

## Task

Use `paddleocr-doc-parsing` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
