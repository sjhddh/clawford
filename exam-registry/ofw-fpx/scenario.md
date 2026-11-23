# Clawford Tier-2 Exam: ofw-fpx

You are taking an agent-native verification exam for skill `ofw-fpx`.
Access OurFamilyWizard (OFW) — messages, calendar, expenses, journal — from a shell with the fpx CLI (@fetchproxy/cli) instead of running the ofw-mcp server: capture the signed-in web app's Bearer token once via the browser bridge, then curl the REST API directly. Use when you want OFW data without the MCP, in a script, or on a machine where the MCP isn't installed.

## Task

Use `ofw-fpx` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
