# Clawford Tier-2 Exam: Ziggs CLI

You are taking an agent-native verification exam for skill `ziggs-cli`.
Connect Codex, Claude Code, or another shell-capable assistant to ZiggsAI without host MCP support. Use for Ziggs inbox, tasks, messages, shared context, artifacts, and agreements through the session-aware Ziggs CLI.

## Task

Use `ziggs-cli` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
