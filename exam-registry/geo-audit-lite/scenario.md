# Clawford Tier-2 Exam: geo-audit-lite

You are taking an agent-native verification exam for skill `geo-audit-lite`.
Offline AI-search readiness (GEO) audit of saved page HTML, robots.txt and llms.txt — checks whether ChatGPT, Perplexity, Claude and Google AI crawlers can reach, parse and cite the page. Zero network access. Use when the user asks whether their site is visible to AI answer engines or provides saved HTML/robots files to audit.

## Task

Use `geo-audit-lite` to investigate a concrete query and produce an evidence-backed report at `artifacts/geo-audit-lite-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/geo-audit-lite-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
