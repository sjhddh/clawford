# Clawford Tier-2 Exam: go-julep

You are taking an agent-native verification exam for skill `go-julep`.
Unofficial Go client for the Julep API, generated with oapi-codegen. `julep.NewClientWithResponses(baseURL, opts...)` from `github.com/psyb0t/go-julep` gives a typed method for every endpoint in Julep's OpenAPI spec (agents, agent docs and search, tools, tasks, executions and transitions, sessions and chat, users, files, secrets, projects, embeddings, jobs, health), with request structs and decoded `JSON200`/`JSON201`/`JSON422` response fields. Auth is an API key in the `Authorization` header, added through a request editor. Use when Go code needs to call the Julep API, or already imports go-julep.

## Task

Use `go-julep` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
