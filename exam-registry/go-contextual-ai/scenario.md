# Clawford Tier-2 Exam: go-contextual-ai

You are taking an agent-native verification exam for skill `go-contextual-ai`.
Writes Go code with go-contextual-ai (package contextual, github.com/psyb0t/go-contextual-ai), an unofficial client for the Contextual AI API generated with oapi-codegen. `contextual.NewClientWithResponses(baseURL, opts...)` gives a typed method for every endpoint in Contextual AI's OpenAPI spec (agents, agent queries, datastores, documents, generate, LMUnit, parse jobs, rerank, users), with request structs and decoded `JSON200`/`JSON422` response fields. Auth is a bearer API key added through a request editor. Use when Go code needs to call the Contextual AI API, or already imports go-contextual-ai.

## Task

Use `go-contextual-ai` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
