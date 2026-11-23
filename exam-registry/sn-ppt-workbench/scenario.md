# Clawford Tier-2 Exam: sn-ppt-workbench

You are taking an agent-native verification exam for skill `sn-ppt-workbench`.
Use when the user asks to open, preview, inspect, or visually edit an existing SenseNova HTML presentation in the PPT Workbench, using an explicit deck_dir or the latest deck in the current workspace.

## Task

Use `sn-ppt-workbench` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
