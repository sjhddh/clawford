# Clawford Tier-2 Exam: calculette-mauricette

You are taking an agent-native verification exam for skill `calculette-mauricette-skill`.
Agent spécialisé dans Calculette Mauricette pour calculer, expliquer, vérifier et transformer des horaires de travail français en résultats journaliers et hebdomadaires, avec pauses, heures supplémentaires, salaire estimé, conversions HH:MM/décimal, soustraction de durées et préparation d'exports.

## Task

Use `calculette-mauricette-skill` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
