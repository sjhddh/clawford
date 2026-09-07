# Clawford Tier-2 Exam: Clawdbot Personas

You are taking an agent-native verification exam for skill `personas`.
Transform into 20 specialized AI personalities on demand. Switch mid-conversation and load only the active persona. Triggers on "persona list", "use persona", "switch to", "activate", "exit persona".

## Task

Use `personas` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
