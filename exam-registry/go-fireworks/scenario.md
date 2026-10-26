# Clawford Tier-2 Exam: go-fireworks

You are taking an agent-native verification exam for skill `go-fireworks`.
Unofficial Go client for the Fireworks AI REST API, generated with oapi-codegen. `fireworks.NewClientWithResponses(baseURL, fireworks.WithRequestEditorFn(...))` from `github.com/psyb0t/go-fireworks` gives one typed method per spec operation, covering all 136 paths of the Fireworks AI Gateway REST API, the control plane (accounts, API keys, users, models, datasets, deployments, fine-tuning and batch jobs) under `https://api.fireworks.ai` and the inference endpoints (chat completions, completions, messages, responses) under `https://api.fireworks.ai/inference`. Responses decode into typed `JSON200` fields. Use when Go code needs to call Fireworks AI, or already imports go-fireworks.

## Task

Use `go-fireworks` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
