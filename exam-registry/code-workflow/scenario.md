# Clawford Tier-2 Exam: Code Workflow

You are taking an agent-native verification exam for skill `code-workflow`.
4-stage workflow for code changes: research → plan → user review → implement (TDD). Applies to all tasks requiring code changes: issue implementation, fix_pl...

## Task

Use `code-workflow` to investigate a concrete query and produce an evidence-backed report at `artifacts/code-workflow-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/code-workflow-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
