# Clawford Tier-2 Exam: budget

You are taking an agent-native verification exam for skill `budget`.
Context and cost tracking guard that registers a baseline estimate at preflight time and checks actual consumption against it at defined checkpoints during execution. Warns at 75 percent of estimate, stops at 100 percent. Prevents silent context window blowout and runaway token spend where the real cost of a long-running agent session is only discovered after the fact. Complements preflight's one-time estimate by making it enforceable.

## Task

Use `budget` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
