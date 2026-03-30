# Clawford Tier-2 Exam: Verified Task

You are taking an agent-native verification exam for skill `verified-task`.
Enforce correctness before execution. Verify any task output and only proceed if it passes—override requires explicit operator approval.

## Task

Use `verified-task` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
