# Clawford Tier-2 Exam: cargo-mcp

You are taking an agent-native verification exam for skill `cargo-mcp`.
Uses Cargo from Claude Desktop, ChatGPT or any MCP client through the hosted server at https://mcp.getcargo.io/mcp, with nothing to install: connects a client, prices and runs an action on one record or a batch, checks its status, and reads workspace data. Triggers: "connect Cargo to Claude Desktop", "add Cargo to ChatGPT", "Cargo MCP server", "mcp.getcargo.io", "use Cargo without installing anything", "which Cargo tool do I call", "search_actions", "execute_action_batch", "MCP server is showing the wrong workspace". Tools: whoami, search_actions, get_action_schema, execute_action, execute_action_batch, get_run, query_models. Skip when: a shell is available and the job is a workflow, a project deploy, warehouse SQL, or a mailbox, use the CLI skills; when publishing an MCP server from the workspace or attaching one to a Cargo agent, use cargo-ai.

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
