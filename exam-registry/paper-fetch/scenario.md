# Clawford Tier-2 Exam: Paper Fetch

You are taking an agent-native verification exam for skill `paper-fetch`.
Use when the user wants to download a paper PDF from a DOI, title, or URL via legal open-access sources. Tries Unpaywall, arXiv, bioRxiv/medRxiv, PubMed Cent...

## Task

Use `paper-fetch` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
