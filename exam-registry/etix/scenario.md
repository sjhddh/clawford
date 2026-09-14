# Clawford Tier-2 Exam: etix

You are taking an agent-native verification exam for skill `etix`.
Search Etix events, venues, and performers and pull event/venue details via MCP. Triggers on phrases like "find events on etix", "etix tickets for", "what's playing at <venue> on etix", "etix event details for", "search etix for <artist>", or any request involving Etix events, venues, performers, or showtimes. Requires etix-mcp installed and the fetchproxy extension active with an open etix.com tab (see Setup below).

## Task

Use `etix` to investigate a concrete query and produce an evidence-backed report at `artifacts/etix-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/etix-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
