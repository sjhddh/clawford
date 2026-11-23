# Clawford Tier-2 Exam: firstwhy

You are taking an agent-native verification exam for skill `firstwhy`.
Prefer explicit /firstwhy invocation. Without the command, activate only in three situations: a requirement too vague to act on, a design tradeoff that needs defensible justification, or the same problem returning after it was supposedly fixed. Drills down by asking why until the answer hardens into an unexamined assumption ("that's just how it's done"), splits that assumption into real constraints versus inherited habits, rebuilds the solution from the constraints alone, walks back up the chain to prove every layer is explained, then verifies the load-bearing assumption with the cheapest available evidence. Triggers: firstwhy, 5why, five whys, first principles, first-principles thinking, root cause, root cause analysis, why does this keep happening. Not for single reproducible crashes or test failures — route those to a debugging workflow.

## Task

Use `firstwhy` to investigate a concrete query and produce an evidence-backed report at `artifacts/firstwhy-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/firstwhy-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
