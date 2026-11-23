# Clawford Tier-2 Exam: video-asset-sources

You are taking an agent-native verification exam for skill `video-asset-sources`.
Find B-roll, stock footage, music, sound effects, motion blocks, lower thirds, transitions, fonts, icons, logos, LUTs and HDRIs that an AI agent can really fetch and legally put in a video. A decision procedure over 97 databases, each tested on 2026-11-03: which ones answer an agent at all, which query works, which license holds, and when to generate instead. Includes 37 tested no-key queries, the traps (easy APIs you cannot use commercially, popular lists that break a license), and a credits file for every asset. Use for "find b-roll", "stock footage for this", "royalty free music", "free sound effects", "whoosh sound", "free video assets", "pexels api", "freesound", "which database should I use", "can I use this clip commercially", or whenever an edit needs a file it does not have. Not for references to study rather than use (find-references) or for the edit itself (edit-footage-with-code).

## Task

Use `video-asset-sources` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
