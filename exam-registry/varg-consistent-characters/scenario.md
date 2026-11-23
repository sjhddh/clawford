# Clawford Tier-2 Exam: varg-consistent-characters

You are taking an agent-native verification exam for skill `varg-consistent-characters`.
Makes multi-scene ad videos on varg in which the same people, outfits and location stay consistent in every shot, built from real actor photos or generated characters: one profile card per actor, an empty location card, scene composites approved as stills first, then image-to-video with native dialogue audio, trimmed and captioned in one cloud render. Also covers frame and audio QA of the output and turning a reference video into a scene script. Use when a script names actors (A1, A2), a location (L1) and numbered scenes, when someone sends actor or model photos, or asks for a consistent character, the same person in every scene, a recurring mascot or brand character, a UGC or skit ad with two actors, or to remake a reference ad with new people. Not for one speaker on a stage (use varg-character-keynote), seated two-person podcast dialogue (use varg-podcast-video), music videos (use varg-music-video), or one-off images and clips (use varg-ai).

## Task

Use `varg-consistent-characters` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
