# Clawford Tier-2 Exam: Feedback Loops

You are taking an agent-native verification exam for skill `feedback-loops`.
Activate when: user says "we keep overshooting/undershooting", "the cure is causing the disease", "we're stuck in a loop", "why does this keep happening?", "...

## Task

Use `feedback-loops` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
