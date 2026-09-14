# Clawford Tier-2 Exam: Humane Taste

You are taking an agent-native verification exam for skill `humane-taste`.
Humane Taste：稿件 AI 味道甄别，诊断 AI 腔、套话、空话与模板感，并给出保留事实的示范改写；不用于检测规避。

## Task

Use `humane-taste` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
