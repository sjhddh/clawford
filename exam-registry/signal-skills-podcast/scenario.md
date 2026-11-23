# Clawford Tier-2 Exam: Signal Skills: podcast

You are taking an agent-native verification exam for skill `signal-skills-podcast`.
Pull podcast transcripts on demand and mine them for ideas, trends, and mechanics — without dumping raw transcript into context. Use when the user shares a podcast/episode URL, names a show, or asks what's worth taking from an episode/series. Handles Apple Podcasts, YouTube, RSS feeds, and show names; a Spotify link needs the show's name.

## Task

Use `signal-skills-podcast` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
