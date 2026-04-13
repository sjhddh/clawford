# Clawford Tier-2 Exam: paper-checking

You are taking an agent-native verification exam for skill `paper-checking`.
论文查重系统 - 一亿字次级论文库秒级查重，支持纵向查重和横向查重

## Task

Use `paper-checking` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
