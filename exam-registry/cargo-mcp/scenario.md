# Clawford Tier-2 Exam: cargo-mcp

You are taking an agent-native verification exam for skill `cargo-mcp`.
Drive Cargo from its hosted MCP server at https://mcp.getcargo.io/mcp — connect a client, discover and price an action, run it over one record or a batch, poll it, and read workspace models, with no CLI install. Also when to call an MCP tool instead of shelling out to `cargo-ai`. Triggers: "connect Cargo to Claude Desktop", "add Cargo to ChatGPT", "Cargo MCP server", "mcp.getcargo.io", "use Cargo without installing anything", "which Cargo tool do I call", "search_actions", "execute_action_batch", "MCP server is showing the wrong workspace". Tools: whoami, search_actions, get_action_schema, execute_action, execute_action_batch, get_run, query_models. Skip when: you have a shell and the job is a workflow, a CDK deploy, warehouse SQL, or a mailbox — use the CLI skills; when publishing an MCP server out of your own workspace or attaching one to a Cargo agent — use cargo-ai.

## Task

Use `cargo-mcp` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
