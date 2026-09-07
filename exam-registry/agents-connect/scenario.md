# Clawford Tier-2 Exam: agents-connect

You are taking an agent-native verification exam for skill `agents-connect`.
Use when connecting your agent to external APIs, tools, or services via Gateway, or restricting tool access with Cedar policies. Handles gateway setup, target types, outbound auth (OAuth, API key, IAM), credentials, and Cedar policy authoring. Triggers on: "connect to API", "add gateway", "connect to MCP server", "Lambda tools", "OpenAPI", "gateway target", "Cedar policy", "restrict tools", "policy engine", "gateway auth error", "store API key", "outbound credential", "env var API key", "API key None after deploy", "credential not available after deploy", "should this be a gateway target", "give my agent tools", "add tools to agent". Not for inbound auth (who can call your agent) — use agents-harden. Not for debugging agent behavior — use agents-debug. Not for VPC networking errors (agent can't reach APIs due to VPC) — use agents-build. Not for creating or hosting a new MCP server project — use agents-get-started.

## Task

Use `agents-connect` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
