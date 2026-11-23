# Clawford Tier-2 Exam: medication-travel-companion

You are taking an agent-native verification exam for skill `medication-travel-companion`.
Use when traveling with prescription medications (especially controlled substances, insulin/GLP-1 cold chain, or daily-schedule meds across time zones). Screens a med list against TSA/airport security rules, destination bans, cold-chain storage physics, and supply math; builds timezone-shift dose schedules and a doctor letter.

## Task

Use `medication-travel-companion` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
