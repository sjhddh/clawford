# Clawford Tier-2 Exam: Memory Poison Auditor

You are taking an agent-native verification exam for skill `memory-poison-auditor`.
Audits OpenClaw memory files for injected instructions, brand bias, hidden steering, and memory poisoning patterns. Use when reviewing MEMORY.md, daily memor...

## Task

Use `memory-poison-auditor` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
