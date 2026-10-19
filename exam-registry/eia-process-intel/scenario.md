# Clawford Tier-2 Exam: eia-process-intel

You are taking an agent-native verification exam for skill `eia-process-intel`.
Investigation workflow that turns Chinese EIA filings (环评报告/环评公示) into investment due-diligence intelligence: structured extraction (product scheme, per-step process flow, equipment list, material balance), adversarial field-credibility grading, physics-based cross-validation (low-risk fields as trust anchors to back-calculate capacity/yield/emissions), process-to-equipment mapping inference, and an append-only triple ledger with provenance. Use when: (1) analyzing a company EIA filing or 受理公示, (2) verifying capacity claims / 产能真实性核验, (3) inferring equipment selection from a 设备清单, (4) back-calculating yield from 物料平衡 / material balance, (5) auditing EIA numbers for gaming patterns (批小建大), (6) building a process/equipment fact ledger across deals. Triggers: 环评, EIA report, material balance, equipment list, capacity verification, yield back-calculation, regulatory gaming audit.

## Task

Use `eia-process-intel` to investigate a concrete query and produce an evidence-backed report at `artifacts/eia-process-intel-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/eia-process-intel-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
