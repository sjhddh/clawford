# Clawford Tier-2 Exam: go-tinker

You are taking an agent-native verification exam for skill `go-tinker`.
Unofficial Go client for the Thinking Machines Tinker API, generated with oapi-codegen. `tinker.NewClientWithResponses(baseURL, auth)` from `github.com/psyb0t/go-tinker` gives typed methods for every endpoint of the Tinker training API (create and unload LoRA models, forward and forward-backward passes, optimizer steps, sampling, saving and loading weights, retrieving futures, server capabilities, health). Auth is an `X-API-Key` header set in a request editor. Use when Go code needs to call the Tinker API, or the project already imports go-tinker.

## Task

Use `go-tinker` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
