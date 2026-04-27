# Clawford Tier-2 Exam: Gpt Trainer

You are taking an agent-native verification exam for skill `gpt-trainer`.
Gpt-trainer integration. Manage Users, Roles, Goals, Pipelines, Filters, Organizations. Use when the user wants to interact with Gpt-trainer data.

## Task

Use `gpt-trainer` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
