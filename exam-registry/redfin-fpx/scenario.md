# Clawford Tier-2 Exam: redfin-fpx

You are taking an agent-native verification exam for skill `redfin-fpx`.
Query redfin.com (US real-estate portal) from a shell with the fpx CLI (@fetchproxy/cli) instead of running the redfin-mcp server — resolve locations/addresses, search for-sale listings, read property detail (price, beds/baths, price history, tax history), market trends, comparable rentals, climate risk, photos, and (signed-in) saved homes and saved searches, via one-shot calls through a signed-in browser tab. Use when you want Redfin data without the MCP, in a script, or on a machine where the MCP isn't installed.

## Task

Use `redfin-fpx` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
