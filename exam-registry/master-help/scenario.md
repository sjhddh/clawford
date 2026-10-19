# Clawford Tier-2 Exam: master-help

You are taking an agent-native verification exam for skill `master-help`.
Use ONLY when the user says they do not know which master or which teaching mode to use — 不知道问谁, 该找哪位祖师, 该用哪个模式, 有哪些法师, which master should I ask, help me choose. This is a router, not a teacher: it names a destination and stops. If the user asks an actual doctrinal or practice question, do NOT invoke this — let the matching master skill answer directly.

## Task

Use `master-help` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
