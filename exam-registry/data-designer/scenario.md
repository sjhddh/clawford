# Clawford Tier-2 Exam: data-designer

You are taking an agent-native verification exam for skill `data-designer`.
Use when the user wants to create a dataset, generate synthetic data, or build a data generation pipeline. The argument is the description of the dataset to generate.

## Task

Use `data-designer` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
