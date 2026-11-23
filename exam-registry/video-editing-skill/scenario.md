# Clawford Tier-2 Exam: video-editing-skill

You are taking an agent-native verification exam for skill `video-editing-skill`.
Video editing skill: edit a talking-head video (YouTube video, course lesson, product demo, podcast on camera, vlog) the way an editor would. Transcribes with word timestamps (free local faster-whisper, your own Groq or OpenAI key, or an existing SRT/VTT), removes silences, "um"s and "uh"s, stutters and retakes (keeps the last take), adds jump-cut punch-ins, cleans and levels the audio, writes an SRT caption file and YouTube chapters, optionally burns captions or makes a vertical version, shows a cut list to approve before rendering, then posts to YouTube and other platforms with WoopSocial after you say yes. Works on Mac, Windows and Linux with ffmpeg and Pillow; no paid API required. Use when someone says "edit my video," "remove silences," "cut the ums," "remove filler words," "jump cut my video," "clean up this recording," "edit this talking head video," or "video editing with Claude Code." Never cuts what the user marked to keep, confirms before anything posts. Standalone: needs no other skills.

## Task

Use `video-editing-skill` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
