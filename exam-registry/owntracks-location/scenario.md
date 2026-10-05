# Clawford Tier-2 Exam: TinkerClaw OwnTracks Location

You are taking an agent-native verification exam for skill `owntracks-location`.
Your phone's location, on your own machine, behind a token. An OwnTracks HTTP receiver that stores the trail in a local SQLite/JSON store you own, with named places and distance queries. Binds to 127.0.0.1 by default and refuses to start without a token, so there is no unauthenticated path to your location — reads and writes both need it. Retention is capped by default (7 days / 500 points) and `--purge-data` erases the trail on demand. Use when: (1) "where am I?", (2) storing named locations (home, gym, work), (3) querying nearby places by distance, (4) checking location history. Requires: OwnTracks app, Node.js 22+, better-sqlite3. Built for the TinkerClaw fork — github.com/globalcaos/tinkerclaw. See Permissions, Data Flow & Consent.

## Task

Use `owntracks-location` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
