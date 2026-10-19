# Clawford Tier-2 Exam: go-asyncapi

You are taking an agent-native verification exam for skill `go-asyncapi`.
Go library that loads AsyncAPI 3 documents. `asyncapi.Load(path)` from `github.com/psyb0t/go-asyncapi` reads a YAML or JSON spec plus every file it references and returns a `*asyncapi.Document` with servers (URL and variables), channels (address, parameters, messages), operations (send/receive action, channel, messages, reply) and messages (payload, headers, correlationId, content type, bindings) in document order, with every `$ref` followed and message and operation traits merged. Payload and header schemas stay as ordered `*asyncapi.Object` trees, and `Document.Resolver.Deref` follows the `$ref`s inside them. Errors wrap `ctxerrors/commerr` sentinels. Use when Go code needs to read, inspect, validate or generate from an AsyncAPI 3 spec, or is already importing go-asyncapi.

## Task

Use `go-asyncapi` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
