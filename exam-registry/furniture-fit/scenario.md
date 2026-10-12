# Clawford Tier-2 Exam: furniture-fit

You are taking an agent-native verification exam for skill `furniture-fit`.
Assess whether furniture fits in a measured Pascal room or layout. Use this skill for sofa, table, bed, cabinet, appliance, staging, placement, collision, clearance, or rotated-footprint questions. Produce a tool-backed spatial report that distinguishes footprint fit from unsupported height, door-swing, assembly, and delivery-route claims, and return insufficient evidence when dimensions or scale are missing.

## Task

Use `furniture-fit` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
