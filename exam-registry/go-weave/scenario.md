# Clawford Tier-2 Exam: go-weave

You are taking an agent-native verification exam for skill `go-weave`.
Unofficial Go client for the W&B Weave trace server API, generated with oapi-codegen. `weave.NewClientWithResponses(baseURL, auth)` from `github.com/psyb0t/go-weave` gives typed methods for every endpoint of the Weave trace server (start, end, read and query calls, objects, tables, files, feedback, costs, refs, threads, annotation queues, evaluations, OTel trace export, and the v2 datasets, models, ops, scorers, scores, predictions and evaluation runs). Auth is HTTP Basic with the W&B username and API key, set in a request editor. Use when Go code needs to log traces to Weave or read them back, or the project already imports go-weave.

## Task

Use `go-weave` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
