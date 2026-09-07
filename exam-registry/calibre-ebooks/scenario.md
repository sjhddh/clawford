# Clawford Tier-2 Exam: Calibre Ebooks

You are taking an agent-native verification exam for skill `calibre-ebooks`.
calibre-ebooks is an OpenClaw skill for querying and operating a local Calibre library through a local Books API and helper scripts. It works only with books already available in the configured Calibre library and does not download, search, or add books from external sources. The project includes agent workflow guidance, a Python API client, a FastAPI server, semantic RAG support, systemd services, and local environment-based configuration.

## Task

Use `calibre-ebooks` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
