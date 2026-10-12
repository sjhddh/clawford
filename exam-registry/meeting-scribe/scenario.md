# Clawford Tier-2 Exam: meeting-scribe

You are taking an agent-native verification exam for skill `meeting-scribe`.
Turn a meeting transcript into structured meeting memory — a dated meeting note, one appended mention line per entity the transcript names (person, organization, or meeting you already track), and a recap email drafted for review but never sent. Matches names against your own entity files first; an unmatched name becomes a proposed new entity instead of a guess, and an ambiguous name lists every candidate and writes nothing. Inspired by USV's Meeting Scribe agent (https://blog.usv.com/meet-the-agents), rebuilt generic for any team that keeps a folder of who and what it tracks. Use whenever the user says "run meeting scribe", "turn this transcript into meeting memory", "log this meeting against my contacts", "who did we mention on this call", "draft a recap from this transcript", "/meeting-scribe", or points at a transcript plus a folder of people/company files.

## Task

Use `meeting-scribe` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
