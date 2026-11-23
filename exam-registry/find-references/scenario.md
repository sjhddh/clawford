# Clawford Tier-2 Exam: find-references

You are taking an agent-native verification exam for skill `find-references`.
Find real, human-made references before anything is made, for AI image, video and music and for video made with code. Turns a request into one query pack per job (light first, then framing, people, location, texture, type, motion, palette, music and a "never" board), searches each source in its own words, opens everything it keeps, proves who made it, measures what code can measure, checks light with an LLM judge, and hands a person three candidates per job. Use when someone says "find references", "reference board", "what should this look like", "lighting reference", "framing reference", "texture reference", "font reference", "motion reference", "casting reference", "music reference", "moodboard references", "make it not look like AI", "avoid slop", "rank these references", or starts a video with no look yet. Not for writing the look from chosen references (video-moodboard, varg-video-prompting), building the cast (character-passport) or downloading one known link (media-download).

## Task

Use `find-references` to investigate a concrete query and produce an evidence-backed report at `artifacts/find-references-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/find-references-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
