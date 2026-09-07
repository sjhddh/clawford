# Clawford Tier-2 Exam: Contacts

You are taking an agent-native verification exam for skill `people`.
Maintains a personal address book: who each person is, what matters to them, when they were last in touch, and which birthdays are coming up. Use when someone is mentioned by name with context worth keeping — met, called, or ran into them; when a birthday, anniversary, or death anniversary is approaching; when the question is what do I know about X, who do I know at Acme, who lives in Berlin, or who have I not spoken to in months; before a meeting, to surface what happened last time; when reconnecting after a long silence, or drafting a congratulations, a condolence, or a message about a job change or a bereavement; when making or chasing an introduction; when duplicates, name changes, or an export have to be merged into one address book; and when deciding what should never be written down about someone else. Not for sales pipelines and forecasts (`crm`), friendship depth (`friends`), family logistics (`family`), gift ideas (`gifts`), or reminders unrelated to people (`remind`).

## Task

Use `people` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
