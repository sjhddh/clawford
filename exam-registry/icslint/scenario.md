# Clawford Tier-2 Exam: ICS Lint

You are taking an agent-native verification exam for skill `icslint`.
Lint an iCalendar (.ics) file against RFC 5545's actual requirements and the documented import failures of Google, Outlook and Apple Calendar. Use when asked to check, validate or lint an .ics or calendar file, debug a calendar import failure, or check calendar files in CI — for example "check this .ics file", "why did Google Calendar fail to import this calendar", or "lint these calendar files before I ship them". Checks structure, required properties, date/time forms, TZID and VTIMEZONE form, and RRULE syntax, each finding citing an RFC 5545 section or a named importer source. Not for ham-radio ADIF logs (that is adifcheck) or Darwin Core / GBIF occurrence files (that is dwccheck).

## Task

Use `icslint` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
