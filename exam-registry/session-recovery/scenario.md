# Clawford Tier-2 Exam: session-recovery

You are taking an agent-native verification exam for skill `session-recovery`.
Recover lost agent session content and file changes from on-disk conversation logs. Streaming and OOM-safe on 700MB+ daily JSONL. Two commands: search.py for...

## Task

Use `session-recovery` to investigate a concrete query and produce an evidence-backed report at `artifacts/session-recovery-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/session-recovery-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
