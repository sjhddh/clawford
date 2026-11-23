# Clawford Tier-2 Exam: collective-memory

You are taking an agent-native verification exam for skill `collective-memory`.
Broadcast a single memory note to multiple AI-agent workspaces in one shot, upserting into MEMORY.md / AGENTS.md / TOOLS.md / USER.md across all targets. Pur...

## Task

Use `collective-memory` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
