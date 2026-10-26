# Clawford Tier-2 Exam: Prospect list

You are taking an agent-native verification exam for skill `prospect-list`.
When the user wants a list of companies to sell to and the people to contact at them — from an ICP, a set of filters, a known source such as an investor portfolio or a directory, or a list of company names. Also use when the user mentions "find customers", "lead list", "prospect list", "target accounts", "build a TAM", "who should we reach out to", "find contacts at these companies", "decision makers at", or "find me [title] at [kind of company]". Input is the ICP or the source; output is a company table, a contact table with verified emails, and a cost record. Runs on Glasser (paid per call) and is the most expensive skill here — it sizes and samples before spending. For a deep read on one company, see investor-diligence. For rivals to the user's own product, see competitor-research.

## Task

Use `prospect-list` to investigate a concrete query and produce an evidence-backed report at `artifacts/prospect-list-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/prospect-list-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
