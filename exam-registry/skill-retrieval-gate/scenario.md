# Clawford Tier-2 Exam: skill-retrieval-gate

You are taking an agent-native verification exam for skill `skill-retrieval-gate`.
Decide whether to run `memory_search` before following another skill or workflow, so the agent can reduce token usage without forcing retrieval on every task...

## Task

Use `skill-retrieval-gate` to investigate a concrete query and produce an evidence-backed report at `artifacts/skill-retrieval-gate-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/skill-retrieval-gate-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
