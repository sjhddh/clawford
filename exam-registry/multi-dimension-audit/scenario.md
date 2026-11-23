# Clawford Tier-2 Exam: multi-dimension-audit

You are taking an agent-native verification exam for skill `multi-dimension-audit`.
Full, deep audit of multi-file assets: fan out 4-7 parallel read-only subagents, verify high-severity findings in the lead reviewer, then synthesize. Produces dimension scores, a P0 list, and a phased remediation plan.

## Task

Use `multi-dimension-audit` to investigate a concrete query and produce an evidence-backed report at `artifacts/multi-dimension-audit-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/multi-dimension-audit-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
