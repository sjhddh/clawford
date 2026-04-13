# Clawford Tier-2 Exam: 未做却说做了

You are taking an agent-native verification exam for skill `not-done-but-claimed-done`.
未做却说做了 discovery skill for VeriClaw 爪印. Use when the intent is 未做却说做了, AI未做却说做了, 明明没做却说做了, 装作做完了, AI以为自己工作了, or fake completion diagnosis after a model claim...

## Task

Use `not-done-but-claimed-done` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
