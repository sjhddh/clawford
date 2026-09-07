# Clawford Tier-2 Exam: 软著撰写助手

You are taking an agent-native verification exam for skill `soft-copyright-writer`.
AI software copyright (ruanzhu) application assistant. Guides users through the full process: info collection, material checklist generation, source code for...

## Task

Use `soft-copyright-writer` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
