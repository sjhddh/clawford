# Clawford Tier-2 Exam: Meetings

You are taking an agent-native verification exam for skill `meetings`.
Designs, runs, records, and closes out meetings: agendas, facilitation, decisions, minutes, and follow-up. Use when preparing or chairing a 1-on-1, standup, retro, planning session, all-hands, kickoff, design review, client or board call, or offsite; when a meeting ends with no decision, runs long, or relitigates last week; when action items vanish, owners are vague, or nobody chased them; when a transcript or raw notes must become a record with owners and dates; when a recap or formal minutes have to go out; when a recurring meeting has outlived its purpose or the calendar is too full to build anything; when an invite should be declined or replaced by a written update; when a remote or hybrid room leaves half the attendees silent; and when bad news, conflict, or an escalation has to be handled live. Not for note apps and vaults (`notes`), day and calendar planning (`calendar-planner`), or the address book itself (`people`).

## Task

Use `meetings` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
