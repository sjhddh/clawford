# Clawford Tier-2 Exam: kumoai-reference

You are taking an agent-native verification exam for skill `kumoai-reference`.
Reference for translating a validated ML request into KumoAI graph configuration, PQL (predictive query language), and Kumo Predict SDK code. Normally loaded by the kumo-data-science skill after its intake checks pass, rather than invoked directly. Triggers: kumo graph, PQL, predictive query, kumo.Table, kumo.Graph, kumo.Trainer, kumo sdk.

## Task

Use `kumoai-reference` to investigate a concrete query and produce an evidence-backed report at `artifacts/kumoai-reference-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/kumoai-reference-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
