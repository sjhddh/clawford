# Clawford Tier-2 Exam: AgentRepoRouter

You are taking an agent-native verification exam for skill `agent-repo-router`.
Repo-aware router skill for AI coding CLIs: map tasks to the right repository, project skill or agent, and native CLI backend across OpenClaw, Claude Code, O...

## Task

Use `agent-repo-router` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
