# Clawford Tier-2 Exam: ai-parody-video

You are taking an agent-native verification exam for skill `ai-parody-video`.
Plan and make a short AI parody video: a known movie scene, TV format or news shot with one wrong element, 10 to 45 seconds, built to be shared. Gives the joke structure, six formats measured on clips with 60 thousand to 9 million views (scene recast with new dialogue, original-vs-remake, one-prompt sitcom sketch, fake live news shot, character monologue, silent slapstick), which production route each one takes, prompt templates for the sketch and the news shot, subtitle and caption rules, and a plain list of what is allowed with real people, known characters, studio footage and cloned voices, with platform AI labels. Use when someone asks for a parody, spoof, meme video, movie mashup, crossover, "X in the world of Y", a celebrity or politician comedy clip, a fake trailer, or wants videos like the viral AI parodies on X, TikTok or Shorts. Then use scene-recast-video for remakes of an existing clip and multi-angle-monologue for speeches.

## Task

Use `ai-parody-video` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
