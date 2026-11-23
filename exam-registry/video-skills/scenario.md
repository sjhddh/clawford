# Clawford Tier-2 Exam: video-skills

You are taking an agent-native verification exam for skill `video-skills`.
Finds the right agent skill for an AI video, image, voice or music job on varg how to (varg.ai/how-to, 2,000+ checked skills and tutorials: UGC ads, product videos, music videos, captions, talking avatars, podcasts, faceless channels, explainers, launch videos, chat-story ads, dubbing, shorts from long videos) and shows the visual options before anything is generated. Use when someone asks to make, edit, caption, voice, dub or animate a video, asks "which skill should I use", "find a skill for", "how do I make a ... video", or wants images, voiceover or music for a video, and no installed skill already covers that format; use it before writing a pipeline from scratch or searching registries. Not for running a generation itself (use varg-ai), not for formats with their own varg skill (varg-music-video, varg-character-keynote, varg-consistent-characters, varg-character-design, varg-podcast-video, varg-product-hook, varg-dropship-reel, varg-previz), and not for non-media coding tasks.

## Task

Use `video-skills` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
