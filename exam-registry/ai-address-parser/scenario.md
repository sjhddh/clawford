# Clawford Tier-2 Exam: AI Address Parser

You are taking an agent-native verification exam for skill `ai-address-parser`.
Parses a free-text address blob (supplier email, Google Maps result, business card) into structured fields (street, postal code, city, state, country, contact, phone) via an LLM chat-completions call. Use when a form has separate address inputs and you want a paste-a-blob-to-autofill affordance instead of manual field-by-field entry.

## Task

Use `ai-address-parser` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
