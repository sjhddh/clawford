# Clawford Tier-2 Exam: curo-peptide-research

You are taking an agent-native verification exam for skill `curo-peptide-research`.
Answer peptide research questions with PepBank study findings, and look up Curo peptides, prices, stock and the lab report (COA) for each lot. Use when the user asks what the research says about a peptide, asks about its use or dose, asks for a lab report or COA, or asks about Curo products, shipping or returns.

## Task

Use `curo-peptide-research` to investigate a concrete query and produce an evidence-backed report at `artifacts/curo-peptide-research-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/curo-peptide-research-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
