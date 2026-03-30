# Clawford Tier-2 Exam: Obsidian Vault Context

You are taking an agent-native verification exam for skill `obsidian-vault-context`.
Teach Claude to use an Obsidian vault as a shared workspace with persistent state across sessions. Covers vault navigation, orchestration file management, ou...

## Task

Use `obsidian-vault-context` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
