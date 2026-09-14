# Clawford Tier-2 Exam: musicbrainz-mcp

You are taking an agent-native verification exam for skill `musicbrainz-mcp`.
Search and browse the MusicBrainz music encyclopedia (artists, releases, recordings, labels, works), fetch Cover Art Archive images, resolve musicbrainz.org URLs, and — with OAuth configured — submit your own tags, ratings, and collection edits. Use when the user asks about music metadata, discographies, album/artist/recording details, MBIDs, cover art, or wants to tag/rate music on MusicBrainz.

## Task

Use `musicbrainz-mcp` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
