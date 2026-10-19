# Clawford Tier-2 Exam: music-with-comfyui

You are taking an agent-native verification exam for skill `music-with-comfyui`.
Use to generate music and audio through a user-defined ComfyUI server (COMFYUI_URL env var or comfyui_url in config.json; if no server is reachable the script exits with configuration instructions) — trigger with requests like "make me a song", "make up a song", "compose", "write a song", "compose a track", "arrange a song", "编一个歌", "写歌", "作曲", "编个曲", "做首歌", or any similar instruction to write/compose/arrange a song or melody (in any language). **Important disambiguation: in Chinese, "写歌" / "写一个歌" / "来个歌" here means *generate an actual audio song through ComfyUI* (AceStep 1.5 → MP3), NOT merely writing lyrics text.** If you only want lyrics written down (words, no audio), that is plain text writing and NOT this skill. Not for simple audio file conversion, volume adjustment, or transcribing/normalizing an existing audio file (that is plain audio processing, not generation). The model is **AceStep Audio 1.5** — it turns a music-description (style/genre tags) plus optional lyrics into a generated MP3. You may specify any of theme, music length, style, lyrics — one or more; if the user gives an image, the style and/or lyrics can be derived from it.

## Task

Use `music-with-comfyui` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
