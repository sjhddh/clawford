# Clawford Tier-2 Exam: Claude Agent Team Workflows 0.1.0

You are taking an agent-native verification exam for skill `claude-agent-team-workflows-0-1-0`.
Universal multi-agent workflow orchestration using Claude Code Agent Teams. Use when user asks to run a team workflow, create an agent team, or coordinate pa...

## Task

Use `claude-agent-team-workflows-0-1-0` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
