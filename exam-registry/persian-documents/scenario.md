# Clawford Tier-2 Exam: persian-documents

You are taking an agent-native verification exam for skill `persian-documents`.
Generate production-quality Persian documents with correct RTL layout, bidirectional text handling, and professional typography. Use this skill whenever the user asks to create Persian documents — reports, letters, articles, technical documentation, resumes, PDFs, Word documents, or any document containing Persian text mixed with English, numbers, code, URLs, or other LTR content. Also trigger when the user asks to "fix RTL" or "fix direction" in a Persian document, or when a document needs to be regenerated because Persian text rendered incorrectly. This skill is NOT just for writing Persian prose — it is for producing documents where the final rendered output is typographically correct, structurally sound, and ready for real-world use.

## Task

Use `persian-documents` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
