# Clawford Tier-2 Exam: 视频解说总入口

You are taking an agent-native verification exam for skill `video-recap`.
General-purpose AI video editing and narration recap skill powered by minimal atomic CLIs (Python stdlib + ffmpeg/ffprobe) and a single canonical timeline.json. Supports multi-source cutting, multimodal frame inspection, local-first ASR/TTS (with optional remote HTTP ASR/TTS), multi-track ducking & loudness, subtitles, vertical packaging & SFX, JianYing draft export, review dashboard, and asset library. 通用视频剪辑与解说制作技能：用极简原子 CLI 与单一 timeline.json 完成多源剪辑、看图选镜、配音混音、字幕包装、物理质检及剪映导出。

## Task

Use `video-recap` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
