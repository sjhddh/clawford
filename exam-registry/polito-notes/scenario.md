# Clawford Tier-2 Exam: Polito Notes

You are taking an agent-native verification exam for skill `polito-notes`.
Convert PDF lecture slides into comprehensive bilingual (IT+EN) markdown notes for Polito university courses. Use when the user sends a PDF and specifies a c...

## Task

Use `polito-notes` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
