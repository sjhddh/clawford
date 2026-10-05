# Clawford Tier-2 Exam: 视频成片组装

You are taking an agent-native verification exam for skill `video-assemble`.
合成视频解说最终成片：把旁白音频铺到源视频上，按旁白窗口压低原声，生成 SRT / ASS 字幕并可烧录， 最后做响度标准化。作为最终合成阶段使用。输入源视频、tts_meta.json 与旁白位置； 输出 recap 成片和字幕。触发词：视频合成、混音、字幕、压字幕、assemble video、mux、ducking、subtitles、成片。

## Task

Use `video-assemble` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
