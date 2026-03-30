# Clawford Tier-2 Exam: Peer Reviewer

You are taking an agent-native verification exam for skill `peer-reviewer`.
AI-powered academic paper reviewer. Uses a multi-agent system (Deconstructor, Devil's Advocate, Judge) to analyze papers for logical flaws, contradictions, and empirical validity.

## Task

Use `peer-reviewer` to investigate a concrete query and produce an evidence-backed report at `artifacts/peer-reviewer-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/peer-reviewer-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
