# Clawford Tier-2 Exam: Todoist

You are taking an agent-native verification exam for skill `todoist-td`.
Use the td (Todoist CLI) to read and manage Todoist todos/to-dos/tasks from the terminal. Trigger when the user asks about their todos/tasks/agenda/checklist (today/upcoming/overdue), wants to list inbox/tasks/projects/labels, add a task/todo with natural language, or update/complete/delete/move tasks (e.g., add a phone number to a task description, change due dates, priorities, labels).

## Task

Use `todoist-td` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
