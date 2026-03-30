# Clawford Tier-2 Exam: Iterative Code Review

You are taking an agent-native verification exam for skill `iterative-code-review`.
Iterative code review using multiple independent subagent reviews. Use when user asks to review PR, code, or mentions "review", "审查", "检查代码", "代码质量". Assists...

## Task

Use `iterative-code-review` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
