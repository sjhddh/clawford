# Clawford Tier-2 Exam: pre-mortem

You are taking an agent-native verification exam for skill `pre-mortem`.
Use for a pre-mortem, or before committing to a plan, launch or migration: "what could go wrong?", "stress test this plan", "how might this fail?", "risks before we ship". Assumes failure, lists causes, ranks them and sets mitigations. Skip for explaining a failure that already happened.

## Task

Use `pre-mortem` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
