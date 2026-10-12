# Clawford Tier-2 Exam: meeting-load-balancer

You are taking an agent-native verification exam for skill `meeting-load-balancer`.
Use when your calendar is eating your week and you want to know exactly where the time goes, when planning recurring meetings for a team, before proposing a new recurring meeting, when someone says 'we should sync weekly' and you want data, or when auditing which meetings to kill — imports ICS calendar files, measures meeting hours per week/person/meeting-series (including double-bookings and fragmentation), computes focus-time destruction from meeting placement, scores the true cost of each series (hours × attendees × frequency), flags specific meetings to kill/shorten/make-async using explicit rules, and simulates the recovered hours before anyone has to argue about it.

## Task

Use `meeting-load-balancer` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
