# Clawford Tier-2 Exam: CrabPath

You are taking an agent-native verification exam for skill `crabpath`.
Memory graph engine with caller-provided embed and LLM callbacks; core is pure, with real-time correction flow and optional OpenAI integration.

## Task

Use `crabpath` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
