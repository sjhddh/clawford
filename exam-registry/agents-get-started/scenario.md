# Clawford Tier-2 Exam: agents-get-started

You are taking an agent-native verification exam for skill `agents-get-started`.
Use when a developer wants to create a new agent project or get started with AgentCore. Handles framework selection, project scaffolding, first deploy, and first invocation. Triggers on: "build an agent", "create an agent", "get started", "new project", "agentcore create", "which framework", "Strands vs LangGraph", "hello world agent", "first agent", "create MCP server", "host MCP server", "agentcore dev", "dev server", "what port", "local development". Not for adding capabilities to existing projects — use agents-build or agents-connect. Strands vs LangGraph in a migration context routes to agents-build, not here. Connecting to an existing MCP server routes to agents-connect, not here.

## Task

Use `agents-get-started` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
