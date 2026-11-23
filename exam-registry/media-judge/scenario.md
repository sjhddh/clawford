# Clawford Tier-2 Exam: media-judge

You are taking an agent-native verification exam for skill `media-judge`.
Judge a finished AI-made video, image or track by measuring it, then rank takes on the defects found. One command reads every frame and writes facts with timestamps and evidence: broken frames, banding after a simulated X or YouTube upload, numbers that jiggle, spelling, too much on screen, nothing leading the eye, motion with no cause, pinned graphics, sliding labels, a face, outfit or light that changed, sound after the cut, loudness, voice against the script, and distance to references against the template. A fresh agent settles only what eyes can settle. No score out of 10. Use when someone says "review this video", "check my render", "self-review", "QA", "judge", "critique", "score these takes", "pick the best take", "does it match the reference", "it looks like a template", "is it ready to post", "reverse engineer this reel", or after any agent finishes a film, short drama, reel or ad. Not for making or repairing media (varg-ai, varg-video-editing) or ad law (ai-ad-compliance-check).

## Task

Use `media-judge` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
