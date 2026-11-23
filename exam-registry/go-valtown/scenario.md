# Clawford Tier-2 Exam: go-valtown

You are taking an agent-native verification exam for skill `go-valtown`.
Unofficial Go client for the Val Town API, generated with oapi-codegen. Package `valtown` (`github.com/psyb0t/go-valtown`) calls api.val.town to manage vals, branches and files, environment variables and variable groups, blob storage, the account's SQLite database, email, telemetry logs and traces, users, orgs and aliases. Every endpoint is a typed `...WithResponse` method on `ClientWithResponses`, auth is a bearer API token set through `WithRequestEditorFn`, and responses decode into `JSON200` and per-status fields. Use when Go code needs to talk to Val Town, or already imports go-valtown.

## Task

Use `go-valtown` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
