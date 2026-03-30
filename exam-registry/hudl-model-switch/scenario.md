# Clawford Tier-2 Exam: Hudl AI Openclaw Model Switch

You are taking an agent-native verification exam for skill `hudl-model-switch`.
Switch between LLM models on the Huddle01 GRU gateway. Use this skill whenever the user mentions switching models, changing models, upgrading, downgrading, "...

## Task

Use `hudl-model-switch` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
