# Clawford Tier-2 Exam: ambition

You are taking an agent-native verification exam for skill `ambition`.
Invoke on "ambition", "be more ambitious", "elevate this", "go bigger", or "go deeper". Reads what you're already doing and quietly raises its level — then does the harder version, not just describes it.

## Task

Use `ambition` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
