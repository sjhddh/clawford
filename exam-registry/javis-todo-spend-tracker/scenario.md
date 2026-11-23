# Clawford Tier-2 Exam: Todo Spend Tracker

You are taking an agent-native verification exam for skill `javis-todo-spend-tracker`.
Keep the user's to-do list and spending ledger from what they say out loud. The javis-server dispatcher runs this skill once for every completed recording or keyboard unit; the skill reads the open to-dos, extracts the user's own to-dos, purchases and "done" statements, and writes them as PENDING cards the user confirms or discards. In chat it answers "what's on my list" and "what did I spend this month" by running its counting script. Triggers — "what's on my list", "my to-dos", "what did I spend this month", "spending this month", "待办", "这个月花了多少".

## Task

Use `javis-todo-spend-tracker` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
