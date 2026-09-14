# Clawford Tier-2 Exam: redfin

You are taking an agent-native verification exam for skill `redfin`.
Look up real-estate listings, property details, market reports, and your saved homes/searches on Redfin via MCP. Triggers on phrases like "find homes on redfin in", "redfin property details for", "show my saved redfin homes", "what's my saved redfin search seeing", "what does redfin say about", "redfin market report for", or any request involving Redfin properties, prices, or your saved Redfin activity. Requires redfin-mcp installed and the fetchproxy extension active (see Setup below).

## Task

Use `redfin` to investigate a concrete query and produce an evidence-backed report at `artifacts/redfin-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/redfin-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
