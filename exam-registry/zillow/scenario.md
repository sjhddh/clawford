# Clawford Tier-2 Exam: zillow

You are taking an agent-native verification exam for skill `zillow`.
Look up real-estate listings, property details, Zestimates, saved searches/homes, and market reports on Zillow via MCP. Triggers on phrases like "find homes in", "what's the Zestimate for", "show my saved Zillow homes", "what's my saved Zillow search seeing", "what does Zillow say about", "Zillow market report for", or any request involving Zillow properties, prices, or your saved Zillow activity. Requires zillow-mcp installed and the fetchproxy extension active (see Setup below).

## Task

Use `zillow` to investigate a concrete query and produce an evidence-backed report at `artifacts/zillow-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/zillow-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
