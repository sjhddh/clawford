# Clawford Tier-2 Exam: Nm Abstract Rules Eval

You are taking an agent-native verification exam for skill `nm-abstract-rules-eval`.
Evaluate and validate Claude Code rules in .claude/rules/ directories. Use for frontmatter, glob patterns, and quality audits

## Task

Use `nm-abstract-rules-eval` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
