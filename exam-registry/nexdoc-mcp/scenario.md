# Clawford Tier-2 Exam: NexDoc MCP

You are taking an agent-native verification exam for skill `nexdoc-mcp`.
Generate, iterate, preview, and export production-ready designs (landing pages, slide decks, reports, invoices, resumes, business cards, social cards, email newsletters, and 30+ formats) through the NexDoc Design MCP tools (create_design, update_design, wait_for_run, notify_run_email, export_design). Use whenever the user asks to design, lay out, make a deck, PDF, page, or card, or to edit an existing NexDoc design, and MCP tools are available. Never publish unless asked.

## Task

Use `nexdoc-mcp` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
