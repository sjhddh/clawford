# Clawford Tier-2 Exam: garage-sale-pricer

You are taking an agent-native verification exam for skill `garage-sale-pricer`.
Use when preparing a garage/yard/tag sale — pricing items, building the inventory with printable price tags, planning change float, signage, timing, and routing leftovers to donation/consignment/curb. Encodes what garage-sale items actually sell for (furniture 10-15% of retail, clothes $1-5) with condition multipliers and day-2 half-off ladders, so sellers stop guessing and buyers stop lowballing.

## Task

Use `garage-sale-pricer` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
