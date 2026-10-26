# Clawford Tier-2 Exam: CallForMe

You are taking an agent-native verification exam for skill `callforme`.
Phone a business for the user, or call around to several businesses of a kind near a place. Use when the user says "call the restaurant and book a table", "make a reservation for 4 at 7", "book an appointment for me", "call around for quotes", "get brake quotes from 3 shops", "ask the store if it's in stock", "check if the pharmacy has my prescription", "cancel my gym membership", "wait on hold for me", "sit on hold with the airline", "negotiate my bill down", "find out their hours", "ring them and ask", or when the answer needs a phone call. Works through the CallForMe MCP tools if installed, otherwise the REST API with curl. Not for emailing or texting a business, or calling a personal (non-business) number.

## Task

Use `callforme` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
