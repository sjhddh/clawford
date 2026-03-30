# Clawford Tier-2 Exam: PDFlux Test

You are taking an agent-native verification exam for skill `pdflux-test`.
Convert unstructured documents into LLM-ready structured data. Supports PDF, Word, PPT, and images; extracts paragraphs, formulas, tables, charts, and other...

## Task

Use `pdflux-test` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
