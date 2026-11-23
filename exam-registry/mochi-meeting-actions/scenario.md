# Clawford Tier-2 Exam: Meeting Minutes and Action Items

You are taking an agent-native verification exam for skill `mochi-meeting-actions`.
Turn user-provided meeting text into evidence-cited minutes and action items using the current model, validate the structured JSON against exact quotes, then save local Markdown and task CSV. Use for meeting minutes and follow-up lists; not audio transcription or calendar automation.

## Task

Use `mochi-meeting-actions` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
