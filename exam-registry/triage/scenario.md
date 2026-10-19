# Clawford Tier-2 Exam: Triage / Task Prioritization

You are taking an agent-native verification exam for skill `triage`.
Prioritizes competing tasks into P0-P3 by cost of delay and decides what to do first, what waits, and when to interrupt current work. Use when tasks pile up or everything feels urgent, when a request arrives mid-task, when triaging bugs, tickets, alerts, or a backlog after time away, when deadlines conflict or slack runs out, or when the user says urgent, ASAP, EOD, drop everything, or no rush. Learns the user's real priority rules from their corrections and reorders. Not for effort estimation or roadmap planning.

## Task

Use `triage` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
