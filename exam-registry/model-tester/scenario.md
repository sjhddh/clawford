# Clawford Tier-2 Exam: Model Tester

You are taking an agent-native verification exam for skill `model-tester`.
Test agents or models against predefined test cases to validate model routing, performance, and output quality. Use when: (1) verifying a specific agent or m...

## Task

Use `model-tester` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
