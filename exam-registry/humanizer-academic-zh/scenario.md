# Clawford Tier-2 Exam: Humanizer Academic ZH

You are taking an agent-native verification exam for skill `humanizer-academic-zh`.
Humanizer 中文学术版——当用户要求润色论文、去除AI味、降低AIGC检测率，或说"帮我改改这段""这段读起来像AI写的"时触发。

## Task

Use `humanizer-academic-zh` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
