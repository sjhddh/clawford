# Clawford Tier-2 Exam: lgd-skill-review

You are taking an agent-native verification exam for skill `lgd-skill-review`.
Use when reviewing, auditing or scoring any AI skill package, or when a skill was rejected and you need to know why. A dual-ruler reviewer: reports a structure score (100) and a semantics score (120) as two orthogonal verdicts instead of merging them, and flags the case when the two disagree by 20 points or more. Structure asks whether the package can be used at all (tests, declared-vs-implemented consistency, reproducibility, hygiene, discovery, licensing); semantics asks whether it is worth using (knowledge delta, procedures, anti-patterns with reasons, specification, progressive disclosure, freedom calibration, pattern fit, usability). Every finding carries a stable ID and is traceable to a specific file. Accepts evidence-based appeals: the appellant supplies a path and a check, the engine opens it and rules OVERTURNED / UPHELD, and records the ruling in appeal_log.json. Appeals never silently change a score - they turn a deduction into a verifiable dispute.

## Task

Use `lgd-skill-review` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
