# Clawford Tier-2 Exam: furnace-panic-doctor

You are taking an agent-native verification exam for skill `furnace-panic-doctor`.
Use when the heat is out or acting up - no heat, weak heat, short cycling, weird noises, pilot out, error codes. Runs a 10-minute no-tools diagnostic tree, separates DIY-fixable from call-a-pro causes, documents everything for the technician, and knows the safety lines that mean stop now.

## Task

Use `furnace-panic-doctor` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
