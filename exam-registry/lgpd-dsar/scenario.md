# Clawford Tier-2 Exam: lgpd-dsar

You are taking an agent-native verification exam for skill `lgpd-dsar`.
Implement endpoints and operational workflows for data subject rights (DSAR) under LGPD Arts. 18, 19, and 20, distinguishing standard controller SLAs (immediate simplified / 15d complete) from ATPP SLAs under Resolução CD/ANPD nº 2/2022 Art. 14 (15d simplified / 30d complete). Covers legal representatives, ex-employees, informal channels, and proportional identity verification. Outputs `.lgpd/dsar/workflow.md` + endpoint specs.

## Task

Use `lgpd-dsar` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
