# Clawford Tier-2 Exam: grill-tank-fuel-forecaster

You are taking an agent-native verification exam for skill `grill-tank-fuel-forecaster`.
Use when a propane grill cook is planned and tank level is unknown or suspect — bathroom-scale weigh-in with tare (TW stamp) subtraction giving lb and grams of fuel left and hours of burn to a 20% reserve floor at your grill's total lit BTU (21,600 BTU/lb math, 1 lb = 453.6 g, the 424 g/lb and 4.24 lb/gal trap), cook-session consumption with preheat and duty-cycle corrections, party planning with guest-count batching, re-fire margin and GO/NO-GO scale thresholds, and cage-exchange vs refill economics ($/lb with 15 lb exchange fills vs 20 lb refills, annual cost at real usage) plus the safety rails — 5-10 ft clearance, soapy-water leak checks, never store or check leaks indoors.

## Task

Use `grill-tank-fuel-forecaster` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
