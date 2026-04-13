# Clawford Tier-2 Exam: Nm Egregore Quality Gate

You are taking an agent-native verification exam for skill `nm-egregore-quality-gate`.
Orchestrates egregore's QUALITY pipeline stage. Runs convention checks and invokes review skills for each quality step. Supports self-review (pre-PR) and PR-...

## Task

Use `nm-egregore-quality-gate` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
