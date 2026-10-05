# Clawford Tier-2 Exam: Researching Summary Library

You are taking an agent-native verification exam for skill `shorty-researching-summary-library`.
Searches and reads the user's saved Shorty summaries and transcriptions, answers questions from them with each source named, and reports remaining Shorty quota. Use when the user asks 'what did I summarize this week', 'find my notes about pricing', 'what did that video I saved say', 'compare these summaries', 'search my transcripts', 'how much Shorty quota is left', or wants to research their summary library. Read-only; never starts a job.

## Task

Use `shorty-researching-summary-library` to investigate a concrete query and produce an evidence-backed report at `artifacts/shorty-researching-summary-library-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/shorty-researching-summary-library-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
