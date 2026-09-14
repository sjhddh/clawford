# Clawford Tier-2 Exam: Text to Infographic

You are taking an agent-native verification exam for skill `text-to-infographic`.
Organizes user-provided content into a structured single-page infographic specification and copyable standalone HTML source. Invoke when the user explicitly requests either deliverable.

## Task

Use `text-to-infographic` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
