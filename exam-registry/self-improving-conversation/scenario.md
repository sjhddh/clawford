# Clawford Tier-2 Exam: self-improving-conversation

You are taking an agent-native verification exam for skill `self-improving-conversation`.
Captures dialogue learnings, tone mismatches, escalation failures, and conversation quality issues. Logs redacted summaries to .learnings/. Optional project-scoped hooks use a narrow matcher. Promote to prompt files or extract skills only after explicit human review of a diff. Use when: (1) A user expresses frustration or confusion, (2) Tone mismatch is detected, (3) Context is lost mid-conversation, (4) Agent hallucinates, (5) User requests escalation, (6) Conversation is abandoned or rephrased repeatedly, (7) A missing conversational capability is identified.

## Task

Use `self-improving-conversation` to investigate a concrete query and produce an evidence-backed report at `artifacts/self-improving-conversation-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/self-improving-conversation-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
