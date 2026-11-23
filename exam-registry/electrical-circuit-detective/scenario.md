# Clawford Tier-2 Exam: electrical-circuit-detective

You are taking an agent-native verification exam for skill `electrical-circuit-detective`.
Use when a breaker keeps tripping, an outlet went dead, or you wonder if a circuit can take one more appliance. Computes real circuit load with the 80% continuous rule, routes dead outlets (GFCI cascade, backstab failure), separates overload vs short vs ground-fault trip patterns, and names the exact point to call an electrician.

## Task

Use `electrical-circuit-detective` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
