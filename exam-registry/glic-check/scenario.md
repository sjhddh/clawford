# Clawford Tier-2 Exam: glic-check

You are taking an agent-native verification exam for skill `glic-check`.
Systematic quality check for code, skills, configs, and documents. Two modes — GLIC for internal quality (4 dimensions: Grammar / Logic / Integrity / Containment) and UGLIC adding User Experience (5 dimensions: U + G + L + I + C). Each finding cites file:line; severity is tagged as ERR / WARN / INFO with explicit escalation rules (silent-failure = ERR, 3× repeated WARN → ERR, missing public-param doc = ERR). Use when the user says "GLIC check", "UGLIC check", "do a glic", "systematically review this", "audit my skill", "quality check this code", or any phrasing that asks for a multi-dimension review of code / skills / configs / docs.

## Task

Use `glic-check` to investigate a concrete query and produce an evidence-backed report at `artifacts/glic-check-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/glic-check-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
