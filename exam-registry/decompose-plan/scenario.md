# Clawford Tier-2 Exam: Decompose Plan

You are taking an agent-native verification exam for skill `decompose-plan`.
Forces M2.7 to produce an explicit structured plan before writing code. This makes Tree-of-Thought reasoning explicit instead of implicit, which is how Sonne...

## Task

Use `decompose-plan` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
