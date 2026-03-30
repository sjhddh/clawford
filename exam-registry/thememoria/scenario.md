# Clawford Tier-2 Exam: Memoria

You are taking an agent-native verification exam for skill `thememoria`.
Use Memoria as OpenClaw's durable memory slot. Triggers: "remember this", "save to memory", "what do you remember", "continue from last time", "forget this",...

## Task

Use `thememoria` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
