# Clawford Tier-2 Exam: Video to Shorts Skill

You are taking an agent-native verification exam for skill `video-to-shorts-skill`.
Video to shorts skill: turn a long video (podcast, interview, talk, webinar, stream, YouTube video) into vertical short clips for TikTok, Instagram Reels and YouTube Shorts, then post them to one or many accounts with WoopSocial. Transcribes with word timestamps (free local faster-whisper, your own Groq or OpenAI key, or an existing SRT/VTT), scores every candidate moment with a clip rubric (hook, standalone, payoff), cuts 1080x1920 clips with ffmpeg, removes pauses, keeps the speaker in frame, burns word-by-word captions and a hook line, normalises the audio, and writes titles and captions. Works on Mac, Windows and Linux with ffmpeg and Pillow; no paid API required. Use when someone says "video to shorts," "clip my podcast," "turn this video into shorts," "make reels from my video," "podcast clips," "long video to short clips," or "repurpose my YouTube video." Clips only what the user owns or has permission to use, confirms before anything posts. Standalone: needs no other skills.

## Task

Use `video-to-shorts-skill` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
