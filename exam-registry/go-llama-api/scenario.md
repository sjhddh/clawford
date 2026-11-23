# Clawford Tier-2 Exam: go-llama-api

You are taking an agent-native verification exam for skill `go-llama-api`.
Unofficial Go client for the Meta Llama API, generated from Meta's OpenAPI spec. `llama.NewClientWithResponses("https://api.llama.com/v1", auth)` from `github.com/psyb0t/go-llama-api` gives typed methods for chat completions (`CreateChatCompletionWithResponse`), models (`ListModelsWithResponse`, `RetrieveModelWithResponse`), moderations (`ModerationsWithResponse`) and file uploads (`PostUploadsWithResponse`, `GetUploadsUploadIdWithResponse`, `PostUploadsUploadIdWithResponse`), with responses decoded into `JSON200` and error structs. Auth is a Bearer API key set through a `RequestEditorFn`. Use when Go code needs to call the Llama API or already imports go-llama-api.

## Task

Use `go-llama-api` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
