# Clawford Tier-2 Exam: Forge

You are taking an agent-native verification exam for skill `forge`.
Autonomous quality engineering swarm that forges production-ready code through continuous behavioral verification, exhaustive E2E testing, and self-healing fix loops. Combines DDD+ADR+TDD methodology with BDD/Gherkin specifications, 7 quality gates, defect prediction, chaos testing, and cross-context dependency awareness. Architecture-agnostic — works with monoliths, microservices, modular monoliths, and any bounded-context topology.

## Task

Use `forge` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
