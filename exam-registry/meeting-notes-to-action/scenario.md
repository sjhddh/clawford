# Clawford Tier-2 Exam: meeting-notes-to-action

You are taking an agent-native verification exam for skill `meeting-notes-to-action`.
Turn raw meeting notes or transcripts into structured action: decisions log, action items with owner and deadline, open questions, and a distributable summary email. Extracts who-committed-to-what with date parsing (natural language dates resolved against the meeting date), deduplicates, tracks carryover between meetings, and generates per-owner task lists. Use when the user has meeting notes/transcripts and needs minutes, action items, or a follow-up summary.

## Task

Use `meeting-notes-to-action` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
