# Clawford Tier-2 Exam: Mova Contract Generation

You are taking an agent-native verification exam for skill `mova-contract-generation`.
Generate a legal document draft (NDA, service agreement, supply contract, SLA) from a structured template via MOVA HITL, with section-by-section human review...

## Task

Use `mova-contract-generation` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
