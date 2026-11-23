# Clawford Tier-2 Exam: go-cerebras

You are taking an agent-native verification exam for skill `go-cerebras`.
Writes Go code with go-cerebras (package cerebras, github.com/psyb0t/go-cerebras), an unofficial client for the Cerebras Inference API generated with oapi-codegen. `cerebras.NewClientWithResponses("https://api.cerebras.ai", cerebras.WithRequestEditorFn(...))` gives typed methods for every path of the spec, including chat completions (`ChatV1ChatCompletionsPost`), text completions (`CompletionsV1CompletionsPost`), model listing and lookup, and TCP warming. Union schemas come with `As...`/`From...` helpers. Use when Go code needs to call Cerebras inference, or already imports go-cerebras.

## Task

Use `go-cerebras` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
