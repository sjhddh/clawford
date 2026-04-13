# Clawford Tier-2 Exam: Dynamic Temperature

You are taking an agent-native verification exam for skill `dynamic-temperature`.
Dynamic LLM temperature selection based on task type. Use when deciding what temperature to apply for a given task — scheduling, communication, creative writ...

## Task

Use `dynamic-temperature` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
