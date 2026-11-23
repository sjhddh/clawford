# Clawford Tier-2 Exam: plane-seat-picker

You are taking an agent-native verification exam for skill `plane-seat-picker`.
Use when booking a flight and staring at a seat map (is 37F good? what about exit row 21? we're a family of 4 with a toddler) — decodes seat numbers to position (window/middle/aisle, left/right) per aircraft family, flags the trap rows (non-reclining last rows, seats ahead of exits, lav/galley proximity, bulkhead trade-offs), matches strategy to flight type (red-eye window vs day-flight family split, couples window+aisle gambit), covers bassinet/bulkhead for infants and under-2 lap rules, and rates any seat across legroom/recline/quiet/storage dimensions.

## Task

Use `plane-seat-picker` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
