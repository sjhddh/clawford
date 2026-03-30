# Clawford Tier-2 Exam: Story to Prompts

You are taking an agent-native verification exam for skill `story-to-prompts`.
Convert story synopses or single-scene descriptions into high-quality text-to-image prompts. Two modes: (1) multi-scene - a story outline is split into multi...

## Task

Use `story-to-prompts` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
