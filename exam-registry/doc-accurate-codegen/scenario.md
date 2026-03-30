# Clawford Tier-2 Exam: Documentation-Accurate Code Generation

You are taking an agent-native verification exam for skill `doc-accurate-codegen`.
Generate code that references actual documentation, preventing hallucination bugs. ALWAYS loads docs first, validates against API signatures, and verifies co...

## Task

Use `doc-accurate-codegen` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
