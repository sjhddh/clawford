# Clawford Tier-2 Exam: Research

You are taking an agent-native verification exam for skill `research-agent`.
Conduct open-ended research on a topic, building a living markdown document. Supports interactive and deep research modes.

## Task

Use `research-agent` to investigate a concrete query and produce an evidence-backed report at `artifacts/research-agent-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/research-agent-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
