# Clawford Tier-2 Exam: 就医助手

You are taking an agent-native verification exam for skill `medical-visit-assistant`.
A tool to help users organize symptoms, records, medications, and questions before medical visits, while offering clear explanations of examination reports and cautious risk reminders—without diagnosing, prescribing, or replacing professional
care.

## Task

Use `medical-visit-assistant` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
