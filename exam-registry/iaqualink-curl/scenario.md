# Clawford Tier-2 Exam: iaqualink-curl

You are taking an agent-native verification exam for skill `iaqualink-curl`.
Read an iAqualink (Zodiac / Jandy / Fluidra) pool system straight from a shell with curl — sign in, list systems, and fetch the iAqua home/aux screens or an eXO chlorinator's shadow — without running the iaqualink-mcp server. Use for a one-off "what's the pool temperature" from the terminal, scripting, or debugging the API. Credentials come from the macOS Keychain item "iaqualink". Derived from iaqualink-py 0.7.0; live verification pending.

## Task

Use `iaqualink-curl` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
