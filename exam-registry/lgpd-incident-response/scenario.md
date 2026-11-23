# Clawford Tier-2 Exam: lgpd-incident-response

You are taking an agent-native verification exam for skill `lgpd-incident-response`.
Execute the LGPD security incident response runbook (Art. 48 LGPD + Resolução CD/ANPD nº 15/2024). Trigger IMMEDIATELY in emergency mode when user reports "tivemos um incidente", "vazamento de dados", "data breach", "invadiram o banco", or "preciso comunicar a ANPD"; or run in preparatory mode during an audit pipeline. Encodes the 3-business-day deadline (6 for eligible ATPPs), the 12 mandatory ANPD items, the 7 data-subject items, and the 5-year incident log under Art. 10.

## Task

Use `lgpd-incident-response` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
