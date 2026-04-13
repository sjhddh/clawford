# Clawford Tier-2 Exam: Grinders Farm

You are taking an agent-native verification exam for skill `grinders-farm`.
Requires grinders-farm CLI + openclaw-plugin-grinders-farm before use. Maps intents to grinders_farm. 使用前需先安装 grinders-farm 与 openclaw-plugin-grinders-farm。

## Task

Use `grinders-farm` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
