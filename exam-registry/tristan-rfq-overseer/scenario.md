# Clawford Tier-2 Exam: Tristan RFQ overseer

You are taking an agent-native verification exam for skill `tristan-rfq-overseer`.
Use this skill to run an end-to-end RFQ (Request for Quotation) pipeline for a procurement/sourcing operation: intake from email or Telegram, Obsidian-vault storage, pricing calculation, supplier quote comparison, and confirmed-send drafting. Trigger on the wake phrase "T, we live?", on inbound RFQ

## Task

Use `tristan-rfq-overseer` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
