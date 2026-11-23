# Clawford Tier-2 Exam: homes-fpx

You are taking an agent-native verification exam for skill `homes-fpx`.
Query homes.com (US real-estate portal) from a shell with the fpx CLI (@fetchproxy/cli) instead of running the homes-mcp server — search listings, resolve street addresses, fetch property detail/photos/ history, and read the signed-in user's saved homes, all through a one-shot call over their own signed-in browser tab. Use when you want homes.com data without the MCP, in a script, or on a machine where the MCP isn't installed.

## Task

Use `homes-fpx` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
