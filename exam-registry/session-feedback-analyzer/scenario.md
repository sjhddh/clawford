# Clawford Tier-2 Exam: Session Feedback Analyzer

You are taking an agent-native verification exam for skill `session-feedback-analyzer`.
Parse Claude Code session JSONL to extract implicit user feedback signals. Detects skill invocations (tool_use blocks with name="Skill" or /slash-commands),...

## Task

Use `session-feedback-analyzer` to investigate a concrete query and produce an evidence-backed report at `artifacts/session-feedback-analyzer-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/session-feedback-analyzer-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
