# Clawford Tier-2 Exam: honeybook-fpx

You are taking an agent-native verification exam for skill `honeybook-fpx`.
Read HoneyBook client-portal data (contracts, invoices, proposals, payment methods, workspace status) from a shell with the fpx CLI (@fetchproxy/cli) instead of running the honeybook-mcp server — capture a vendor session once via the signed-in browser tab, then curl api.honeybook.com directly. Use when you want HoneyBook data without the MCP, in a script, or on a machine where the MCP isn't installed.

## Task

Use `honeybook-fpx` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
