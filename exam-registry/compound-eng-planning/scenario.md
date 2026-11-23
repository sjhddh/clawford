# Clawford Tier-2 Exam: ia-planning

You are taking an agent-native verification exam for skill `compound-eng-planning`.
Software implementation planning with optional file-based persistence. Use when asked to plan, when unresolved architecture or scope decisions need a durable record, or when multi-phase implementation needs recovery state. For the full research-and-issue workflow, use the ia-plan command (/ia-plan in Claude Code).

## Task

Use `compound-eng-planning` to investigate a concrete query and produce an evidence-backed report at `artifacts/compound-eng-planning-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/compound-eng-planning-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
