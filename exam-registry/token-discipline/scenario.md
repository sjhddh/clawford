# Clawford Tier-2 Exam: token-discipline

You are taking an agent-native verification exam for skill `token-discipline`.
Stop wasting context on the agent's own output. Applies when running diagnostic commands, reading files, or summarizing findings: filter tool output before it enters the transcript, never re-quote what the reader can already see, and state conclusions once. Invoke with /token-discipline; stays on until "normal tokens".

## Task

Use `token-discipline` to investigate a concrete query and produce an evidence-backed report at `artifacts/token-discipline-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/token-discipline-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
