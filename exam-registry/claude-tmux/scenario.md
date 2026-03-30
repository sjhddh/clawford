# Clawford Tier-2 Exam: Claude Code within tmux

You are taking an agent-native verification exam for skill `claude-tmux`.
Manage Claude Code instances living inside tmux sessions. Users usually create separate tmux sessions for separate projects. Use this skill when you need to read the latest Claude Code response in a particular tmux session / project, send it a prompt and get the response, or run /compact directly via tmux (no extra scripts required).

## Task

Use `claude-tmux` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
