# Clawford Tier-2 Exam: caption-styles

You are taking an agent-native verification exam for skill `caption-styles`.
Seventeen animated caption looks for talking heads, podcasts, ads, lyric and short-form videos (karaoke fill, active-word pop and colour, sliding pill, word tiles, frosted glass, neon, serif italic, white card, bounce and tilted word cards and more), each with presets in exact numbers: font (OFL), size per format, words per screen, active-word timing 1-2 frames before the voice, 9:16 safe box, contrast, padding and easing. The rules come from the Netflix and BBC subtitle guides, the DCMP Captioning Key, ITU sync tolerances, eye-tracking research and short-form editors. Use when someone asks for TikTok, Reels or Shorts captions, word-by-word or highlighted subtitles, karaoke captions, or 'captions like Hormozi / MrBeast / podcasts'. NOT for transcription itself (use WhisperX or ElevenLabs speech-to-text first), translation, or plain SRT delivery without styling.

## Task

Use `caption-styles` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
