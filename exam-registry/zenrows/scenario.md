# Clawford Tier-2 Exam: zenrows

You are taking an agent-native verification exam for skill `zenrows`.
Fetch live web pages, extract structured data and run browser automation through the official Zenrows MCP server. Use when the agent needs the current content of a URL, specific fields from a page, many URLs fetched as one job, or a multi-step browser session (login, forms, pagination), especially for JavaScript-heavy pages where a plain fetch returns little. Requires the Zenrows plugin or a Zenrows MCP server configured in OpenClaw, and a Zenrows account.

## Task

Use `zenrows` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
