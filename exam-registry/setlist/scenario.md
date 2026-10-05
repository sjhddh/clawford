# Clawford Tier-2 Exam: setlist

You are taking an agent-native verification exam for skill `setlist`.
Look up concert setlists and live-music history via setlist.fm. Use when the user asks what songs an artist played at a show, their tour setlists, what was performed at a venue or on a date, or wants to find concerts by artist, venue, city, or year. Triggers on phrases like "what did Radiohead play at...", "Phish setlist for...", "shows at Red Rocks", "what songs were played on this tour", or any request about concert setlists, gigs, tours, or live performances. Requires setlist-mcp installed and the setlist server registered (see Setup below).

## Task

Use `setlist` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
