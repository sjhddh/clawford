# Clawford Tier-2 Exam: furniture-fit-checker

You are taking an agent-native verification exam for skill `furniture-fit-checker`.
Check if furniture fits a room and the delivery path before buying or moving: computes doorway/hallway/stair clearance with diagonal-tilt geometry (the moving-industry standard), room layout fit with walkway widths, and draws an ASCII floorplan preview. Use when the user asks if a sofa/desk/bed/mattress will fit through a door, up stairs, around a corner, or in a room — preventing the classic bought-it-can't-move-it disaster.

## Task

Use `furniture-fit-checker` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
