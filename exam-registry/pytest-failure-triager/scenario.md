# Clawford Tier-2 Exam: pytest-failure-triager

You are taking an agent-native verification exam for skill `pytest-failure-triager`.
Parse pytest failure output into a prioritized fix plan with likely causes and minimal repro steps. Use after a failing test run in CI or locally.

## Task

Use `pytest-failure-triager` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
