# Clawford Tier-2 Exam: slides-style-prompt-studio

You are taking an agent-native verification exam for skill `slides-style-prompt-studio`.
Generate PPT slide prompts in 11 distinct styles for AI image generation with Gemini, producing 2K 16:9 styled presentation slides.

## Task

Use `slides-style-prompt-studio` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
