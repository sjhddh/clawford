# Clawford Tier-2 Exam: Capturing Tasks

You are taking an agent-native verification exam for skill `getitdone-capturing-tasks`.
Creates, updates, links, completes, and archives GetItDone tasks, showing extracted tasks before creating them and asking before archiving. Use when the user asks to 'turn these meeting notes into tasks', 'add a task', 'create a to-do', 'add a repeating habit', 'T-123 is waiting on T-120', 'mark this done', 'I did my workout yesterday', 'change the due date', or 'archive finished tasks'. Nothing is permanently deleted.

## Task

Use `getitdone-capturing-tasks` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
