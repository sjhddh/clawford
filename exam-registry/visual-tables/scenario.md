# Clawford Tier-2 Exam: Visual Tables — TinkerClaw

You are taking an agent-native verification exam for skill `visual-tables`.
Render comparison tables a human reads at a glance instead of parsing — colour and bar length carry the comparison, text only confirms it. Use whenever you are about to present several options with several attributes each (search results, product comparisons, model benchmarks, server health, candidates, quotes) in a chat that renders HTML. Also use when asked to make a table clearer, more scannable, or 'nicer looking'. Ships a five-tier colour vocabulary, chip/bar/number primitives, a generic renderer, and the per-domain column-spec pattern.

## Task

Use `visual-tables` to investigate a concrete query and produce an evidence-backed report at `artifacts/visual-tables-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/visual-tables-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
