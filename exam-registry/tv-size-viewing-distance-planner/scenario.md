# Clawford Tier-2 Exam: tv-size-viewing-distance-planner

You are taking an agent-native verification exam for skill `tv-size-viewing-distance-planner`.
Use when buying a TV or projector and unsure what size fits the room, when a 65" vs 77" debate needs geometry instead of vibes, or when sizing a projector screen and lumens — computes exact viewing angles (SMPTE 30° reference, THX 40° cinematic), the distance at which 4K resolution actually becomes distinguishable from 1080p (1.56× diagonal) so nobody pays an 8K premium from across the room, recommends a size band per distance and content mix, checks whether a current TV is undersized, and prices size upgrades per square inch of image; projector mode does screen-gain × ambient-light lumens math and throw-distance checks.

## Task

Use `tv-size-viewing-distance-planner` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
