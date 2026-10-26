# Clawford Tier-2 Exam: go-exa

You are taking an agent-native verification exam for skill `go-exa`.
Unofficial Go client for the Exa search API, generated with oapi-codegen from the OpenAPI spec Exa publishes. Package `exa` (`github.com/psyb0t/go-exa`) talks to `https://api.exa.ai` with typed methods for every endpoint, including `SearchWithResponse` (web search with filters by domain, date, category and text, optional page contents), `FindSimilarWithResponse`, `GetContentsWithResponse` (text, highlights and summaries for URLs or result IDs), `AnswerWithResponse` (an answer with citations) and the research task endpoints. Use when Go code needs web search, page contents or cited answers from Exa, or already imports go-exa.

## Task

Use `go-exa` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
