# Clawford Tier-2 Exam: zola-api

You are taking an agent-native verification exam for skill `zola-api`.
Query or update Zola wedding-planning data (vendors, budget, guests, seating, events/RSVPs, registry, gift tracker, inquiries, wedding website) straight from a shell with curl against mobile-api.zola.com, instead of running the zola-mcp server. Use when you want Zola data without the MCP, in a script, or on a machine where the MCP isn't installed. Triggers on "check Zola", "Zola vendors/budget/guests/RSVP/seating/registry", or any Zola wedding data request that should hit the API directly.

## Task

Use `zola-api` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
