# Clawford Tier-2 Exam: eonik companion

You are taking an agent-native verification exam for skill `eonik`.
Use eonik with Claude: brand notes, competitor research archive, own-ad facts, ad breakdowns, memory, and receipt-bound briefs. Agents read and draft; they never spend. You approve every cut. Activates when eonik tools are connected or the user asks about their ads, competitors, brand, or what to make next.

## Task

Use `eonik` to investigate a concrete query and produce an evidence-backed report at `artifacts/eonik-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/eonik-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
