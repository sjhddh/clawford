# Clawford Tier-2 Exam: 对标筛选

You are taking an agent-native verification exam for skill `cell-benchmark-filter`.
Benchmark filtering for Chinese creator, OPC, and one-person-business work. Use when Codex needs to judge whether a person, creator, or business is actually...

## Task

Use `cell-benchmark-filter` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
