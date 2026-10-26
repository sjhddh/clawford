# Clawford Tier-2 Exam: go-mistral

You are taking an agent-native verification exam for skill `go-mistral`.
Unofficial Go client for the Mistral AI REST API, generated with oapi-codegen. `mistral.NewClientWithResponses("https://api.mistral.ai", opts...)` from `github.com/psyb0t/go-mistral` returns a `*mistral.ClientWithResponses` with one typed method per endpoint, named after the spec's operation IDs (`ChatCompletionV1ChatCompletionsPostWithResponse`, `ListModelsV1ModelsGetWithResponse`, `EmbeddingsV1EmbeddingsPostWithResponse` and more). Auth is a bearer API key set through `mistral.WithRequestEditorFn`; union fields such as message content use `From...` and `As...` methods. Use when Go code needs to call Mistral AI or already imports go-mistral.

## Task

Use `go-mistral` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
