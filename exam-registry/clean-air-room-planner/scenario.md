# Clawford Tier-2 Exam: clean-air-room-planner

You are taking an agent-native verification exam for skill `clean-air-room-planner`.
Use when buying or placing an air purifier, living through wildfire smoke, pollen season, or construction dust — computes the exact HEPA CADR a room needs from volume, desired air changes per hour (5 ACH smoke, 4-5 allergy, 2-3 general), checks whether YOUR purifier is adequate or where to move it, sizes DIY box-fan filters (CFM from fan curves + MERV pressure drop), runs a pollution diary that correlates indoor PM2.5 with outdoor events, and tells you when to change filters based on real usage hours.

## Task

Use `clean-air-room-planner` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
