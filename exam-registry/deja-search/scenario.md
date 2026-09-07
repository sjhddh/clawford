# Clawford Tier-2 Exam: deja

You are taking an agent-native verification exam for skill `deja-search`.
Search the user's past AI coding sessions with the deja CLI. Use when they say things like 'didn't we fix this before', 'what did we decide about X', or before re-debugging an error that may already be solved.

## Task

Use `deja-search` to investigate a concrete query and produce an evidence-backed report at `artifacts/deja-search-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/deja-search-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
