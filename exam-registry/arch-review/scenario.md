# Clawford Tier-2 Exam: Arch Review

You are taking an agent-native verification exam for skill `arch-review`.
Stress-test designs before they ship—constraints, trade-offs, failure modes, and ADR-worthy decisions. Use for ADRs, big refactors, new services, or when ‘it...

## Task

Use `arch-review` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
