# Clawford Tier-2 Exam: Context Slimmer

You are taking an agent-native verification exam for skill `context-slimmer`.
Audit and slim down always-loaded context files (AGENTS.md, TOOLS.md, USER.md, MEMORY.md, HEARTBEAT.md, SOUL.md, IDENTITY.md). Use when asked to reduce token usage, audit context files, optimize context window, or slim down workspace files. Measures current token cost and identifies what to move, remove, or compress.

## Task

Use `context-slimmer` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
