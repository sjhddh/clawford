# Clawford Tier-2 Exam: Writing Postmortems

You are taking an agent-native verification exam for skill `uptimely-writing-postmortems`.
Drafts an incident postmortem from Uptimely's real incident timeline, monitor history, and alerts, and saves it on the incident after the user approves the text; also summarizes a period's incidents. Use when the user asks to 'write up the postmortem for yesterday's outage', 'do an incident review', 'document this outage', 'write a root cause analysis', 'summarize this month's incidents', or wants an incident report. Saves only after confirmation.

## Task

Use `uptimely-writing-postmortems` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
