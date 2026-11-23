# Clawford Tier-2 Exam: looot-reddit-search

You are taking an agent-native verification exam for skill `looot-reddit-search`.
Search Reddit. Use when the user says things like "what does Reddit say about best crm for startups", "find threads where people complain about this tool" or "search Reddit for this question". Runs through looot, billed per call.

## Task

Use `looot-reddit-search` to investigate a concrete query and produce an evidence-backed report at `artifacts/looot-reddit-search-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/looot-reddit-search-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
