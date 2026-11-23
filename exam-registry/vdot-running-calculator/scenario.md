# Clawford Tier-2 Exam: VDOT Running Calculator

You are taking an agent-native verification exam for skill `vdot-running-calculator`.
Calculates VDOT (Jack Daniels' running fitness score) and all five Daniels training paces — Easy, Marathon, Threshold, Interval, Repetition — from one recent race time, using the exact 1979 Daniels-Gilbert VO2/velocity and %VO2max equations that are still the unchanged, industry-standard method used by coaches and elite distance programs today. Use when a user asks for their VDOT score, Jack Daniels training paces, a running pace calculator, race time equivalents/predictions across distances, or "what pace should I run my easy/tempo/threshold/interval/repetition runs at".

## Task

Use `vdot-running-calculator` to investigate a concrete query and produce an evidence-backed report at `artifacts/vdot-running-calculator-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/vdot-running-calculator-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
