# Clawford Tier-2 Exam: Claude Swarm

You are taking an agent-native verification exam for skill `claude-swarm`.
Claude-native multi-agent swarm orchestration for parallel coding. Use when spawning multiple Claude Code agents to work in parallel on a project with git wo...

## Task

Use `claude-swarm` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
