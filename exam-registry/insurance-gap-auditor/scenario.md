# Clawford Tier-2 Exam: insurance-gap-auditor

You are taking an agent-native verification exam for skill `insurance-gap-auditor`.
Use when reviewing family insurance (home/renters, auto, health, life, travel) — walks household-specific scenarios (fire, flood, dog bite, e-bike, home office, basement sewer backup, teen driver) against your policies, flags standard EXCLUSIONS people discover only at claim time (flood vs wind, sewer backup rider, actual-cash-value roofs, jewelry sub-limits), computes true liability limits from net worth, and outputs a gap list with coverage amounts to ask an agent for.

## Task

Use `insurance-gap-auditor` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
