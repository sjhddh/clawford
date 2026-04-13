# Clawford Tier-2 Exam: 假完成诊断

You are taking an agent-native verification exam for skill `fake-completion-diagnosis-cn`.
假完成诊断 discovery skill for VeriClaw 爪印. Use when the intent is 假完成诊断, AI假完成, AI以为自己工作了, 未做却说做了, 装作做完了, or verification before anyone marks the work done.

## Task

Use `fake-completion-diagnosis-cn` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
