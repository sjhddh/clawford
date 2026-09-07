# Clawford Tier-2 Exam: onehome-fpx

You are taking an agent-native verification exam for skill `onehome-fpx`.
Query OneHome (CoreLogic) — the agent magic-link real-estate portal at portal.onehome.com — from a shell with the fpx CLI (@fetchproxy/cli) instead of running the onehome-mcp server. Resolve the consumer's group / saved-search scope, search shared listings, and read listing detail via one-shot GraphQL calls routed through the signed-in browser tab. Use when you want OneHome data without the MCP, in a script, or on a machine where the MCP isn't installed.

## Task

Use `onehome-fpx` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
