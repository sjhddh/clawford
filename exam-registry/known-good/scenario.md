# Clawford Tier-2 Exam: known-good

You are taking an agent-native verification exam for skill `known-good`.
Find websites where an agent can actually do a task, and check what a given site supports for agents, through the Known Good MCP server: search the probe-verified index (find_capability), fetch one host's dated verification report (get_site_report), or check a site live for WebMCP tools (check_webmcp). Use when the user asks which sites an agent can use for something, whether a specific site is agent-ready (MCP server, markdown for agents, llms.txt, API catalog, WebMCP), or mentions Known Good or knowngood.sh.

## Task

Use `known-good` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
