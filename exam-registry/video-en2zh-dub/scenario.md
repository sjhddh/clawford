# Clawford Tier-2 Exam: video-en2zh-dub

You are taking an agent-native verification exam for skill `video-en2zh-dub`.
把英文视频变成中文配音视频，也支持生成中英双音轨。当用户提出"把这个视频翻译成中文/中文化/视频汉化"、"给视频配中文音/中文解说"、"提取字幕并翻译"、"英文视频转中文"、"给视频加一条中文音轨"等需求时使用。执行四步流水线，whisper 转写英文字幕、大模型翻译为中文字幕、edge-tts 合成中文配音、ffmpeg 音画合并，产出中文配音版 mp4。

## Task

Use `video-en2zh-dub` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
