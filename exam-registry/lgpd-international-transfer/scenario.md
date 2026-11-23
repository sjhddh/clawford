# Clawford Tier-2 Exam: lgpd-international-transfer

You are taking an agent-native verification exam for skill `lgpd-international-transfer`.
Assess and structure international data transfers per LGPD Arts. 33-36, Resolução CD/ANPD nº 19/2024 (Brazilian Standard Contractual Clauses), and Resolução CD/ANPD nº 32/2026 (EU/EEA adequacy decision). Use when user asks 'transferência internacional', 'AWS US LGPD', 'AWS Frankfurt UE LGPD', 'decisão de adequação', 'cláusulas-padrão', 'SCCs Brasil', 'data residency', or onboarding vendors/sub-processors outside Brazil. Outputs per-vendor transfer assessments in `.lgpd/transfers/`.

## Task

Use `lgpd-international-transfer` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
