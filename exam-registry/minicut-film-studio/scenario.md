# Clawford Tier-2 Exam: MiniCut film studio

You are taking an agent-native verification exam for skill `minicut-film-studio`.
Turns Claude Code or Codex into an AI film studio with the MiniCut CLI. Idea or script to story, shot sheet, character and location pictures, video takes, voice lines, music and an edited cut in the MiniCut editor, on Seedance, Kling, Wan and other models. Checks every step and stops before every paid run with the price. Use when the user wants to make an AI short film, AI drama, AI series, trailer, ad, music video or multi-shot video, or says "make a film", "make an episode", "storyboard this", "make a short drama".

## Task

Use `minicut-film-studio` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
