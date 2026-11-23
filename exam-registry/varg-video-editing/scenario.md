# Clawford Tier-2 Exam: varg-video-editing

You are taking an agent-native verification exam for skill `varg-video-editing`.
Which service to edit an existing video with, and how to edit it without breaking it. A routing guide for ten editing jobs: cut, trim, resize and join (FFmpeg, Rendi), talking-head cleanup (silence and filler cuts), long video to Shorts (OpusClip, or transcript + FFmpeg), captions and subtitles (ASS through FFmpeg, HyperFrames, Submagic), assembling from a timeline or template (HyperFrames, Shotstack), AI edits that restyle, swap people, relight or extend (varg Recast/Relight, Runway Aleph), dubbing and lip sync (HeyGen, ElevenLabs, Sync Labs), upscaling, slow motion and background removal (Topaz, Bria), finding moments and QA (Gemini, Twelve Labs), and handing off to Resolve, Premiere or Final Cut. Use when someone asks to edit, cut, trim, shorten, clip, reframe, caption, subtitle, translate, dub, lip-sync, upscale, restyle or clean up footage they already have, or asks which tool or API to edit video with. Not for making a video from a brief (varg-ai and the format skills).

## Task

Use `varg-video-editing` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
