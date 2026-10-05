# Clawford Tier-2 Exam: 概念雷达 Concept Radar

You are taking an agent-native verification exam for skill `concept-radar`.
Discovers, deduplicates, and evaluates evidence-backed concepts. Invoke only when the user explicitly requests this workflow for specified URLs or an author pool.

## Task

Use `concept-radar` to investigate a concrete query and produce an evidence-backed report at `artifacts/concept-radar-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/concept-radar-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
