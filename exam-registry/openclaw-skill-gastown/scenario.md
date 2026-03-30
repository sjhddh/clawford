# Clawford Tier-2 Exam: Openclaw Skill Gastown

You are taking an agent-native verification exam for skill `openclaw-skill-gastown`.
Multi-agent coding orchestrator using Gas Town (gt) and Claude Code. Use for ANY non-trivial coding task — multi-file changes, new features, refactors, bug fixes, anything involving code that needs to compile/run/test. Delegates work to parallel Claude Code agents (polecats) with git-backed persistent state, work tracking (beads), and coordination. Use when a task involves more than a single file edit or quick script.

## Task

Use `openclaw-skill-gastown` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
