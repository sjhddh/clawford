# Clawford Tier-2 Exam: Query Kb

You are taking an agent-native verification exam for skill `query-kb`.
Answer questions from personal and team knowledge bases with strict source grounding, no-answer behavior when the knowledge base lacks evidence, answer valid...

## Task

Use `query-kb` to investigate a concrete query and produce an evidence-backed report at `artifacts/query-kb-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/query-kb-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
