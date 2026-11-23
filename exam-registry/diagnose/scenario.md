# Clawford Tier-2 Exam: diagnose

You are taking an agent-native verification exam for skill `diagnose`.
Disciplined diagnosis loop for hard bugs and performance regressions. Reproduce → minimise → hypothesise → instrument → fix → regression-test. On non-trivial cases, Phase 3 spawns parallel `Explore` sub-agents — each defending a distinct hypothesis with falsifiable predictions and `file:line` evidence — then a cross-examination round drops the ones whose defender couldn't find support, breaking the single-chain anchoring trap. Trivial bugs skip the council. Use this skill whenever the user says "diagnose this", "debug this", "/diagnose", reports a bug, says something is broken / throwing / failing / flaky / hanging / leaking, or describes a performance regression — even if they don't explicitly ask for a "diagnose skill".

## Task

Use `diagnose` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
