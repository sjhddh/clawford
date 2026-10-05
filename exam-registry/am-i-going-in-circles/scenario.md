# Clawford Tier-2 Exam: Am I going in circles?

You are taking an agent-native verification exam for skill `am-i-going-in-circles`.
Am I going in circles? Am I repeating myself? Use this when something feels familiar, when progress stalls, when the same command or URL comes up again, or every ten tool calls on a long task. Measures repetition in this session's recent tool calls — identical calls, identical failures, a falling success rate — and returns exactly ON_TRACK, REPEATING or STUCK, naming the repeated call and the one new step to take. Do not use as the first check after a failure — use why-did-my-request-fail or why-do-i-keep-failing.

## Task

Use `am-i-going-in-circles` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
