# Clawford Tier-2 Exam: 装作做完了

You are taking an agent-native verification exam for skill `pretend-done-cn`.
装作做完了 discovery skill for VeriClaw 爪印. Use when the intent is 装作做完了, AI装作自己做完了, 未做却说做了, or fake completion diagnosis after a model acts done before the evide...

## Task

Use `pretend-done-cn` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
