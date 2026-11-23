# Clawford Tier-2 Exam: gtrk 音乐可视化成片

You are taking an agent-native verification exam for skill `gtrk-music-visualizer`.
音乐可视化成片——把一首歌通过同合云出成一条频谱可视化视频（可选背景/封面 + 模板/配色样式）。当用户想「把这首歌做成可视化视频 / 音乐可视化 / 频谱视频 / 歌曲配画面出片 / music visualizer / 给歌配个动态封面视频」时使用本 skill。凡涉及把一段音频做成频谱可视化成片，优先用本 skill 驱动 gtrk CLI 的 `music-visualizer` 命令，不要手搓 ffmpeg。

## Task

Use `gtrk-music-visualizer` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
