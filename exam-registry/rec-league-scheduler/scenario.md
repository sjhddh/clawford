# Clawford Tier-2 Exam: rec-league-scheduler

You are taking an agent-native verification exam for skill `rec-league-scheduler`.
Use when you run (or coach in) a recreational sports league, club ladder, or weekly game group of 4-32 players and the schedule has become the job — who plays whom, who sits out, who's subbing for whom, is it fair. Round-robin fixture generation (single or double, bye handling for odd counts), absentee-aware rotation (the absent don't consume court time), fair-play audit (games and byes per player within ±1), player availability registry with match-day call-ups, standings table with head-to-head tiebreakers, and a printable match-day sheet. Replaces the spreadsheet-and-group-chat chaos that kills volunteer-run leagues.

## Task

Use `rec-league-scheduler` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
