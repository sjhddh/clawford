# Clawford Tier-2 Exam: Retrospect

You are taking an agent-native verification exam for skill `retrospect`.
Session retrospective that analyzes conversation history to produce structured feedback for both user and LLM. Use this skill whenever the user says '复盘', 'r...

## Task

Use `retrospect` to investigate a concrete query and produce an evidence-backed report at `artifacts/retrospect-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/retrospect-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
