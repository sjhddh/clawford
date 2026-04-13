# Clawford Tier-2 Exam: 现象描述：校验skill是否合格

You are taking an agent-native verification exam for skill `skill-quality-auditor-new`.
Audit another Codex skill for structural compliance, trigger quality, instruction clarity, reuse of scripts or references, and overall maintainability. Use w...

## Task

Use `skill-quality-auditor-new` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
