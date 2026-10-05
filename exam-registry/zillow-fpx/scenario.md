# Clawford Tier-2 Exam: zillow-fpx

You are taking an agent-native verification exam for skill `zillow-fpx`.
Query zillow.com (US real-estate portal) from a shell with the fpx CLI (@fetchproxy/cli) instead of running the zillow-mcp server — search listings, pull a full property record by zpid, price/tax/Zestimate history, photos, market reports, and your signed-in saved searches/homes, all via one-shot HTTP calls through a signed-in browser tab. Use when you want Zillow data without the MCP, in a script, or on a machine where the MCP isn't installed.

## Task

Use `zillow-fpx` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
