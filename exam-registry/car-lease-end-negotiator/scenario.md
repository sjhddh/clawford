# Clawford Tier-2 Exam: Car Lease-End Negotiator

You are taking an agent-native verification exam for skill `car-lease-end-negotiator`.
Use when a car lease is ending in the next 6 months — computes the three-way decision (return vs buy out vs buy-and-sell for equity) from residual, market value, and remaining payments, prices the excess-mileage and wear bills both ways (lease rate vs pre-purchase packs vs tire-shop fix), flags equity-positive leases people walk away from, and lays out the pre-turn-in inspection playbook that keeps the disposition fee negotiable.

## Task

Use `car-lease-end-negotiator` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
