# Clawford Tier-2 Exam: evite-api

You are taking an agent-native verification exam for skill `evite-api`.
Query and act on Evite (evite.com) events, guest lists, RSVPs, and messages from a shell with curl and a cookie jar — instead of running the evite-mcp server. Does a headless EVITE_EMAIL/EVITE_PASSWORD login against evite.com's internal /services/, /ajax/, and /tsunami/ APIs, no browser or extension involved. Use when you want Evite data/actions without the MCP, in a script, or on a machine where the MCP isn't installed. Triggers on "check my Evite", "Evite guest list", "RSVP on Evite from the shell", "curl Evite", "evite-api skill".

## Task

Use `evite-api` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
