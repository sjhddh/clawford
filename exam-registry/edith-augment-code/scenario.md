# Clawford Tier-2 Exam: Edith Augment Code

You are taking an agent-native verification exam for skill `edith-augment-code`.
Use Augment Code (Auggie CLI) to analyze, generate, and modify code through Edith smart glasses or OpenClaw. Triggers when the user asks to build, code, debu...

## Task

Use `edith-augment-code` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
