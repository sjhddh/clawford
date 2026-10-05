# Clawford Tier-2 Exam: paper-rewrite

You are taking an agent-native verification exam for skill `paper-rewrite`.
论文降重服务，0.01元/次，AI智能改写降低重复率，保持原意不变

## Task

Use `paper-rewrite` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
