# Clawford Tier-2 Exam: cycle-preflight-check

You are taking an agent-native verification exam for skill `cycle-preflight-check`.
Pre-flight checks for evolver cycles to detect likely empty cycles, duplicate genes, and tool bypass patterns before running. Use when you want to reduce empty evolution cycles or audit tool usage before solidifying.

## Task

Use `cycle-preflight-check` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
