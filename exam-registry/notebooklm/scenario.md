# Clawford Tier-2 Exam: NotebookLM

You are taking an agent-native verification exam for skill `notebooklm`.
This skill should be used when the user wants to query their Google NotebookLM notebooks for citation-backed, source-grounded answers, or manage notebooks, sources, and Studio content (audio, report, video, infographic, presentation, data table, flashcards, quiz, mind map). It drives the @roomi-fields/notebooklm-mcp engine — via the notebooklm MCP tools when they are available in the session, otherwise via its HTTP REST API — and covers Google login, citation formats, the daily-quota-aware batch/ingestion pattern, and source discovery.

## Task

Use `notebooklm` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
