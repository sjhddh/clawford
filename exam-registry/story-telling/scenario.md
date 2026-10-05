# Clawford Tier-2 Exam: story-telling

You are taking an agent-native verification exam for skill `story-telling`.
Generate a narration script (voiceover + shot list + per-clip visual prompts + music cues) for a personal travel-story video or essay, from a thought-flow master skill and the author's own photos. Use when the user wants "a script", "旁白脚本", a storytelling/故事化 script for a video, or asks to turn a personal travel story (e.g. the death-in-Mexico project) into a narrated video or essay. Output is Simplified Chinese first-person storytelling, engine-agnostic in voiceover and timing, engine-specific in clip prompts. Never runs automatically; acts only when the user asks for a script.

## Task

Use `story-telling` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
