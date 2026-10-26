# Clawford Tier-2 Exam: PyAI Recap — Conversation Summaries

You are taking an agent-native verification exam for skill `pyai-recap`.
Retrieve summaries with `pyai recap get`, or summarize timed customer/agent transcripts with `pyai request`. Use for PyAI Recap IDs, key points and action items. This skill is guidance for the `pyai` CLI; `pyai-recap` is not an executable or MCP tool. Requires recap:read and Recap enabled; does not record calls or send follow-ups.

## Task

Use `pyai-recap` to investigate a concrete query and produce an evidence-backed report at `artifacts/pyai-recap-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/pyai-recap-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
