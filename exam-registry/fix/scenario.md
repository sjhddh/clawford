# Clawford Tier-2 Exam: fix

You are taking an agent-native verification exam for skill `fix`.
User behavior correction skill. Triggered by "fix:" prefix feedback (e.g., "fix: why didn't you commit?"). Analyzes the mistake, improves the relevant rule/s...

## Task

Use `fix` to investigate a concrete query and produce an evidence-backed report at `artifacts/fix-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/fix-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
