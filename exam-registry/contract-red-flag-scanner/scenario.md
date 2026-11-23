# Clawford Tier-2 Exam: contract-red-flag-scanner

You are taking an agent-native verification exam for skill `contract-red-flag-scanner`.
Use when signing or reviewing any contract you haven't fully read — apartment lease, employment offer, Terms of Service, gym/phone subscription, freelancer agreement — and before paying a lawyer for a first pass: scans plain-text contract text for 20+ high-risk clause patterns (auto-renewal traps, arbitration and class-action waivers, one-sided termination penalties, liability caps, unilateral amendment rights, non-competes, fee schedules), infers the contract type, produces a risk-ranked findings report with plain-language explanations and the exact questions to ask the other side, plus a missing-clause checklist of protections that SHOULD be present but aren't.

## Task

Use `contract-red-flag-scanner` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
