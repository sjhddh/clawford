# Clawford Tier-2 Exam: job-offer-comparator

You are taking an agent-native verification exam for skill `job-offer-comparator`.
Use when comparing two or more job offers, deciding between a remote and on-site role, weighing a higher salary against a long commute, moving cities for a job, pricing the real value of benefits, or preparing a salary negotiation counter-offer. Computes true total compensation — base + expected bonus + capped retirement match + risk-discounted equity − health premiums − commute cost (km + parking) − cost-of-living adjustment — then effective hourly rate on REAL hours (contracted + overtime + commute), PTO valuation, and the exact break-even base salary the losing offer needs to match the winner. Outputs a negotiation-ready target number.

## Task

Use `job-offer-comparator` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
