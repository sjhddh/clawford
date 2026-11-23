# Clawford Tier-2 Exam: hospital-discharge-planner

You are taking an agent-native verification exam for skill `hospital-discharge-planner`.
Audits hospital discharge orders, decodes paperwork, decides post-acute setting with Medicare rules, plans first 72 hours at home, and creates caregiver hand...

## Task

Use `hospital-discharge-planner` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
