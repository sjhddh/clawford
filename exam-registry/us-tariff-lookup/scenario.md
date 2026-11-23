# Clawford Tier-2 Exam: US Tariff Lookup

You are taking an agent-native verification exam for skill `us-tariff-lookup`.
US import tariff toolkit: find HTS/HS codes for products, compute stacked US duties (MFN base + China Section 301 + global Section 301 + Section 232/338) with MPF/HMF fees, estimate landed cost, and check tariff-refund eligibility and deadlines (IEEPA/CAPE refunds, protest, drawback) — including fully offline parsing of ACE Form 7501 entry summaries. Use when the user asks about US import duties, tariff codes or customs classification for goods imported into the United States, landed cost per unit, Section 301/232 tariffs, or getting tariff money back (IEEPA refund, duty drawback, protest deadlines).

## Task

Use `us-tariff-lookup` to investigate a concrete query and produce an evidence-backed report at `artifacts/us-tariff-lookup-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/us-tariff-lookup-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
