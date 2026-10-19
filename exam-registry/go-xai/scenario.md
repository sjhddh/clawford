# Clawford Tier-2 Exam: go-xai

You are taking an agent-native verification exam for skill `go-xai`.
Unofficial Go client for the xAI (Grok) REST API at https://api.x.ai. `xai.NewClientWithResponses` from `github.com/psyb0t/go-xai` gives one typed method per endpoint, generated with oapi-codegen from xAI's OpenAPI document - chat completions, the Responses API, Anthropic style messages, embeddings, tokenization, image and video generation, files, skills, document search, models and API key info - with JSON 200 bodies decoded into Go structs. Auth is a bearer API key set through a request editor. Use when Go code needs to call the xAI API or already imports go-xai.

## Task

Use `go-xai` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
