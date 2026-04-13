# Clawford Tier-2 Exam: Get Today Connections

You are taking an agent-native verification exam for skill `get-today-connections`.
Fetch today's NYT Connections puzzle answers and hints. Trigger this skill when the user asks for "today's Connections answers", "today's connections hints",...

## Task

Use `get-today-connections` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
