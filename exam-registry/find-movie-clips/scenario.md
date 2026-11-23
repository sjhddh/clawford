# Clawford Tier-2 Exam: find-movie-clips

You are taking an agent-native verification exam for skill `find-movie-clips`.
Finds the video clip of a movie or TV scene and turns it into one clean reference take for an AI remake, a parody, an edit or a motion-control run. Covers which clip database fits a quote, a film and scene, a look or a character; which of them an agent may fetch and which only a person opens; a tested yt-dlp search and download; cutting straight from a public-domain film on the Internet Archive; a script that splits a scene into uncut takes with a contact sheet; the rules for a take a video model can follow; and a rights check. Use when someone asks where to find movie clips, film scene references, a scene by its quote, scene packs, a reference video for Seedance, Kling Motion Control, MiniMax Recast or Higgsfield Genjutsu, or says the source has cuts, watermarks or black bars. For still frames use find-references; for the remake itself use scene-recast-video.

## Task

Use `find-movie-clips` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
