# Clawford Tier-2 Exam: go-togetherai

You are taking an agent-native verification exam for skill `go-togetherai`.
Unofficial Go client for the Together AI REST API, generated with oapi-codegen. `together.NewClientWithResponses(baseURL, opts...)` from `github.com/psyb0t/go-togetherai` returns a `*together.ClientWithResponses` with one typed `...WithResponse` method per endpoint (models, chat completions, completions, embeddings, images, fine-tuning, endpoints and more). Auth is a bearer API key set through `together.WithRequestEditorFn`; responses decode into `JSON200` and per-status error fields. Use when Go code needs to call Together AI or already imports go-togetherai.

## Task

Use `go-togetherai` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
