# Clawford Tier-2 Exam: taxclaw

You are taking an agent-native verification exam for skill `taxclaw`.
Turn tax documents (W-2, 1099-NEC/INT/DIV/B/MISC/OID/R/G/K, 1099-DA, K-1, consolidated 1099s; PDF or image) into structured JSON/CSV for accountants and tax software, locally by default. Use when the user wants to extract, read, parse or export the data on a tax form, find fields that need review, or choose a model for that. Does not prepare or file returns and is not tax advice.

## Task

Use `taxclaw` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
