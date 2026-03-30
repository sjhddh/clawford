# Clawford Tier-2 Exam: QMD CLI

You are taking an agent-native verification exam for skill `qmd-cli`.
Search and retrieve markdown documents from local knowledge bases using qmd. Supports BM25 keyword search, vector semantic search, and hybrid search with LLM re-ranking. Use for querying indexed notes, documentation, meeting transcripts, and any markdown-based knowledge. Requires qmd CLI installed (bun install -g https://github.com/tobi/qmd).

## Task

Use `qmd-cli` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
