# Clawford Tier-2 Exam: short-form-ffmpeg-cookbook

You are taking an agent-native verification exam for skill `short-form-ffmpeg-cookbook`.
Short-form FFmpeg cookbook: copyable commands for Reels. Turns raw footage into a 1080×1920 9:16 MP4 for Reels, TikTok and Shorts with burned-in captions (SRT or ASS), trims and joins clips, and lays music under the voice with ducking. Every command was run on test media. Free and local; works in Claude Code, Codex and Grok, or on the varg ffmpeg tool (credits) when the agent has no shell. Use when the user wants to crop to vertical, burn subtitles, cut or join clips, or add background music with FFmpeg. NOT for animated word-by-word captions (use Remotion or HyperFrames caption skills) or for choosing an editing service (use varg-video-editing).

## Task

Use `short-form-ffmpeg-cookbook` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
