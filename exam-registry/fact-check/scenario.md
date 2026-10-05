# Clawford Tier-2 Exam: 快速事实核查

You are taking an agent-native verification exam for skill `fact-check`.
Fast, source-backed answer to a factual question or "is it true that…" claim, returned within a hard time budget (simple ≤2 min, complex ≤5 min) — speed is the goal. Use for a quick verified answer: "fact-check this", "is it true Y", "$fact-check". NOT for an exhaustive research REPORT (→ deep-research).

## Task

Use `fact-check` to investigate a concrete query and produce an evidence-backed report at `artifacts/fact-check-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/fact-check-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
