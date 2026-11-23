# Clawford Tier-2 Exam: diaper-stock-optimizer

You are taking an agent-native verification exam for skill `diaper-stock-optimizer`.
Use when buying diapers in bulk, planning a Costco/Amazon stock-up run, checking how long current diaper stock will last, or deciding size transitions — size-by-size quantity math from the baby's birthday (growth-band durations + tapering changes/day), days-of-stock countdown with order verdicts, and per-size box-lifespan and cost estimates.

## Task

Use `diaper-stock-optimizer` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
