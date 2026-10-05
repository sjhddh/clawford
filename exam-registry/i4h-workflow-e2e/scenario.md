# Clawford Tier-2 Exam: i4h-workflow-e2e

You are taking an agent-native verification exam for skill `i4h-workflow-e2e`.
Run the maintained workflow data-to-policy pipeline from recording through checkpoint validation. Use for full end-to-end requests; do not use for one individual stage.

## Task

Use `i4h-workflow-e2e` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
