# Clawford Tier-2 Exam: Claude Code Agent

You are taking an agent-native verification exam for skill `claude-code-skill`.
Integrates MCP tool servers for orchestration, state persistence with IndexedDB/localStorage, and session sync across devices in OpenClaw/Clawdbot.

## Task

Use `claude-code-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
