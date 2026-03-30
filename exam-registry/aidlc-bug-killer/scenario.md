# Clawford Tier-2 Exam: Aidlc Bug Killer

You are taking an agent-native verification exam for skill `aidlc-bug-killer`.
多Agent协作Bug修复工作流。用于三个Agent协作修bug：SubAgent发现bug，主Agent修复，ReviewAgent确认。当需要协调多个Agent修复项目bug时使用此skill。

## Task

Use `aidlc-bug-killer` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
