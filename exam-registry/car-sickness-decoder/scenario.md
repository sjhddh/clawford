# Clawford Tier-2 Exam: car-sickness-decoder

You are taking an agent-native verification exam for skill `car-sickness-decoder`.
Use when a child (or adult) gets carsick — before a trip to prevent it, mid-episode to manage it, or when episodes keep repeating. Classifies the trigger pattern (classic motion sickness vs vestibular migraine vs anxiety-conditioned), builds the seating/food/timing/cadence protocol, prices OTC antiemetic dosing by weight with hard age gates, and flags the red flags that need a doctor.

## Task

Use `car-sickness-decoder` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
