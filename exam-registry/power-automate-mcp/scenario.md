# Clawford Tier-2 Exam: power-automate-mcp

You are taking an agent-native verification exam for skill `power-automate-mcp`.
Foundation skill for Power Automate via FlowStudio MCP — auth setup, the reusable MCP helper (Python + Node.js), tool discovery via `list_skills` / `tool_search`, and oversized-response handling. Load this skill first when connecting an agent to Power Automate. For specialized workflows, load `power-automate-build`, `power-automate-debug`, `power-automate-monitoring` (Pro+), or `power-automate-governance` (Pro+) — each contains the workflow narrative, this skill provides the plumbing they all rely on. Requires a FlowStudio MCP subscription or compatible server — see https://mcp.flowstudio.app

## Task

Use `power-automate-mcp` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
