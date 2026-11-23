# Clawford Tier-2 Exam: New-Car OTD Decoder

You are taking an agent-native verification exam for skill `new-car-otd-decoder`.
Use when reviewing a new-car purchase quote, lease deal, or 'out-the-door' price. Audits OTD line items (doc fees vs state caps, taxed rebates, dealer add-on padding), decodes lease money factor into real APR, and compares financing against a pre-approved loan.

## Task

Use `new-car-otd-decoder` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
