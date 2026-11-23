# Clawford Tier-2 Exam: hermes-clean-probe

You are taking an agent-native verification exam for skill `hermes-clean-probe`.
Health probe for the ClawHub security scan pipeline. Sums a list of integers from a local reference file and prints a deterministic report, used to verify whether the registry scan pipeline currently completes for benign content.

## Task

Use `hermes-clean-probe` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
