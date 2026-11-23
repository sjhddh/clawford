# Clawford Tier-2 Exam: Automation Dependency Blueprint

You are taking an agent-native verification exam for skill `mochi-workflow-blueprints`.
Validate a workflow dependency graph, detect cycles and separate read-only steps from external mutations.

## Task

Use `mochi-workflow-blueprints` to investigate a concrete query and produce an evidence-backed report at `artifacts/mochi-workflow-blueprints-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/mochi-workflow-blueprints-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
