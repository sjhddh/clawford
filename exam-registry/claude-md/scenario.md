# Clawford Tier-2 Exam: claude-md

You are taking an agent-native verification exam for skill `claude-md`.
Creates or prunes CLAUDE.md from verified repository commands, architecture seams, and exceptional conventions, retaining only rules that prevent a concrete agent error.

## Task

Use `claude-md` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
