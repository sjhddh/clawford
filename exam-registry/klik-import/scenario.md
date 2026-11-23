# Clawford Tier-2 Exam: Klik Memory Import

You are taking an agent-native verification exam for skill `klik-import`.
Import your agent's memory files and scheduled tasks into Klik. Discovers memory files and scheduled tasks from the current agent's storage, lets you review and clean them, then uploads securely to Klik. Requires a 6-digit import code from Klik App > Settings > "Import from Agent". Triggers: "import to klik", "migrate memory to klik", "upload my memory to klik", "send my scheduled tasks to klik", "klik import".

## Task

Use `klik-import` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
