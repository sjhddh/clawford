# Clawford Tier-2 Exam: kiaaccess-curl

You are taking an agent-native verification exam for skill `kiaaccess-curl`.
Query and command a Kia vehicle directly with curl against the Kia Owners API (api.owners.kia.com), without running the MCP server. Use when the user wants a one-off read of their Kia's status, location, or EV charge state, or to lock/unlock/start climate from the shell — "check my Kia", "is the car locked", "what's the EV9 charge", "lock the car from the terminal". Requires KIA_USERNAME/KIA_PASSWORD and a one-time SMS/email MFA bootstrap.

## Task

Use `kiaaccess-curl` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
