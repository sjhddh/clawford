# Clawford Tier-2 Exam: lgpd-legal-basis

You are taking an agent-native verification exam for skill `lgpd-legal-basis`.
Choose and document the lawful basis (base legal) for each mapped personal data processing activity under LGPD Art. 7 (common data), Art. 11 (sensitive data), and Art. 14 + Enunciado CD/ANPD nº 1/2023 (children and adolescents). Use after `lgpd-data-mapping` or when designing a new feature, asking "qual base legal usar", "consentimento ou legítimo interesse", or "base legal para menores". Produces `.lgpd/legal-basis.md` and `.lgpd/lia/{slug}.md`.

## Task

Use `lgpd-legal-basis` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
