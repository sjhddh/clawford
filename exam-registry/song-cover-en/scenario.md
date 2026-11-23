# Clawford Tier-2 Exam: Song Cover EN - 中文歌转英文翻唱

You are taking an agent-native verification exam for skill `song-cover-en`.
把一首中文歌做成英文翻唱成品：抓歌词 → 可唱英文填词 → RMVPE 提真实旋律 → 神经歌声合成（SoulX-Singer）→ 频谱匹配/颤音后处理 → 混音 → ComfyUI 配图 + 律动背景 + 逐词歌词视频。Use when the user wants an English cover of a Chinese song, a singable translation of lyrics, sung vocals from text, a lyric video with a reactive audio background, or asks for 英文翻唱 / 中文歌翻英文 / AI 唱歌 / 歌词视频 / 频谱背景视频.

## Task

Use `song-cover-en` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
