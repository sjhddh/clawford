# Clawford Tier-2 Exam: forensic-audit

You are taking an agent-native verification exam for skill `forensic-audit`.
Three-phase read-only forensic audit of a codebase. Use when the user invokes `/forensic-audit`, asks to run a "forensic audit", "forensic audit pipeline", "multi-pass audit", "security audit", "vulnerability scan", "security check", or "code vulnerability scan".

## Task

Use `forensic-audit` to investigate a concrete query and produce an evidence-backed report at `artifacts/forensic-audit-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/forensic-audit-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
