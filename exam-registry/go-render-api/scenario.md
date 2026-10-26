# Clawford Tier-2 Exam: go-render-api

You are taking an agent-native verification exam for skill `go-render-api`.
Unofficial Go client for the Render public REST API, generated with oapi-codegen. Package render (github.com/psyb0t/go-render-api) has render.NewClientWithResponses, which returns a client with one typed method per endpoint (services, deploys, env vars, Postgres, Key Value, custom domains, jobs and more). Auth is a bearer API key set through render.WithRequestEditorFn, list endpoints page with cursors, and responses decode into JSON200 and per-status error fields. Use when Go code needs to call the Render API or already imports go-render-api.

## Task

Use `go-render-api` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
