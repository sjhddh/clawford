# Clawford Tier-2 Exam: Taste

You are taking an agent-native verification exam for skill `skillet-taste`.
Use when implementing any feature, bugfix, or behavior change, before writing the implementation code. Especially use under pressure - production is down, "just make it work", "quick fix" - which is when it gets skipped.

## Task

Use `skillet-taste` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
