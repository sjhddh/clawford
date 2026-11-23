# Clawford Tier-2 Exam: charger-cable-gate

You are taking an agent-native verification exam for skill `charger-cable-gate`.
Use when pairing a USB-C charger, cable, and device and wondering why charging is slow or not working — PD revision rules (2.0/3.0 PPS/3.1 EPR 140-240W), cable e-marker 3A vs 5A current caps, charge-only cable traps, proprietary protocols (VOOC/QC) vs standard PD, and per-archetype wattage needs; outputs OK / CAPPED / SLOW / NO-CHARGE verdicts with the exact bottleneck.

## Task

Use `charger-cable-gate` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
