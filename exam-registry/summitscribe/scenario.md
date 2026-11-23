# Clawford Tier-2 Exam: SummitScribe

You are taking an agent-native verification exam for skill `summitscribe`.
Look up the user's past meetings in SummitScribe (notes, transcripts, decisions, action items, folders). Use when the user asks what was said or decided in a meeting, who owns a follow-up, or wants to find a meeting by topic, person or date.

## Task

Use `summitscribe` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
