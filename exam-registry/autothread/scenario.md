# Clawford Tier-2 Exam: autothread

You are taking an agent-native verification exam for skill `autothread`.
Add `/topic` to the start of any message and the agent creates a topic/thread from it with an auto-generated title. Telegram and Nicegram: a forum topic is created via the Bot API and the original message is quoted inside it (media is forwarded). Discord: a public thread is created from the message and the quote is posted inside. Signal has no native topics or threads, so its adapter instead posts a titled digest message to the group (or as a DM to a phone number) — no topic object is created there. All credentials are read from the local OpenClaw config; nothing is sent anywhere except the target platform's own API. Each platform adapter is a separate script that implements only its own platform; scripts/ shared helpers handle title fallback and JSON output. The repo also ships an offline test suite with a localhost mock API server (not part of the runtime).

## Task

Use `autothread` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
