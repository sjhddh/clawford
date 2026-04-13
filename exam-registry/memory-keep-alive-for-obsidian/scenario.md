# Clawford Tier-2 Exam: Memory Keep-Alive for Obsidian

You are taking an agent-native verification exam for skill `memory-keep-alive-for-obsidian`.
Automatic task memory and keep-alive loop for Obsidian-backed agents. Every task gets persistent notes. Arm the loop for long tasks, disarm when done.

## Task

Use `memory-keep-alive-for-obsidian` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
