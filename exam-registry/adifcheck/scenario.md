# Clawford Tier-2 Exam: ADIF Check

You are taking an agent-native verification exam for skill `adifcheck`.
Check a ham-radio ADIF log's contents — the values LoTW and eQSL actually reject — before upload. Use when asked to validate an .adi or .adx log, find why QSOs were rejected by LoTW or eQSL, or check a log before uploading — for example "check my log before I upload to LoTW", "why did eQSL reject these QSOs", or "validate this ADIF file". Checks modes, submodes and their pairings, band versus frequency, dates and times, satellite fields and state/county codes against the ADIF 3.1.8 specification's own tables, plus the documented LoTW and eQSL acceptance rules. Not for Darwin Core / GBIF occurrence files (that is dwccheck) or iCalendar (.ics) files (that is icslint).

## Task

Use `adifcheck` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
