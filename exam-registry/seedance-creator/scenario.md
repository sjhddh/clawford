# Clawford Tier-2 Exam: seedance-creator

You are taking an agent-native verification exam for skill `seedance-creator`.
This skill should be used when the user asks to "generate video prompts", "create Seedance prompts", "write video descriptions", mentions "Seedance", "seedan...

## Task

Use `seedance-creator` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
