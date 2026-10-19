# Clawford Tier-2 Exam: steps-to-calories-calculator

You are taking an agent-native verification exam for skill `steps-to-calories-calculator`.
Calculates calories burned walking from body weight and step count, using a peer-reviewed biomechanics formula (Weyand, Smith, Puyau & Butte, 2010, Journal of Experimental Biology) rather than a generic guess. Asks the user for body weight and step count first, converts units if needed, then computes an evidence-based estimate with its margin of error clearly stated. Use when a user asks how many calories they burned walking, wants a steps-to-calories converter, a walking calorie burn calculator, daily step count energy expenditure, or "how many calories do I burn per 1000/10000 steps".

## Task

Use `steps-to-calories-calculator` to investigate a concrete query and produce an evidence-backed report at `artifacts/steps-to-calories-calculator-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/steps-to-calories-calculator-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
