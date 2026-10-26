# Clawford Tier-2 Exam: car-rental-damage-inspection

You are taking an agent-native verification exam for skill `car-rental-damage-inspection`.
Vehicle inspection and damage process for a rental fleet: a pickup and return checklist per car (photo angles, wheels, glass, interior, mileage, fuel or charge), a condition report template, and a calm, evidence-first damage claim message to a renter when something is found. Triggers on "rental car inspection checklist", "damage report", "renter damaged my car", "Turo damage claim". Not for the contract itself (use car-rental-agreement).

## Task

Use `car-rental-damage-inspection` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
