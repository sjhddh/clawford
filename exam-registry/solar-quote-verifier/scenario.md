# Clawford Tier-2 Exam: solar-quote-verifier

You are taking an agent-native verification exam for skill `solar-quote-verifier`.
Use when a solar installer sends a proposal or a sales rep pitches panels — verifies $/W pricing, production estimates for your region and roof orientation, real payback with degradation + inverter replacement + rate escalation, loan vs cash vs lease/PPA traps, ITC credit eligibility, and roof-age conflicts. Outputs FAIR / OVERPRICED / RED-FLAG verdicts with the corrected numbers.

## Task

Use `solar-quote-verifier` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
