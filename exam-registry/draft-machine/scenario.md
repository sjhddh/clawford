# Clawford Tier-2 Exam: Draft Machine

You are taking an agent-native verification exam for skill `draft-machine`.
Use this skill whenever the user wants to send a batch of personalized emails, do a mail merge, or draft outreach emails for multiple recipients using Gmail....

## Task

Use `draft-machine` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
