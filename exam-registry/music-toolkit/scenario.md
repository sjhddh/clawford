# Clawford Tier-2 Exam: Music Toolkit

You are taking an agent-native verification exam for skill `music-toolkit`.
当用户想要【录制电脑声音、内录系统音频、捕获声卡输出、AI智能分轨切歌、自动裁剪录音前后空白/杂音】时自动触发。
专门用于对系统播放的音乐、串烧、整张专辑、网课等音频进行高保真内录，并提供基础静音切分与基于 PyTorch 的 AI 音乐结构分析分轨功能。
用户只需提供录制时长（分钟），即可自动启动后台录音，结束后按要求精细裁剪并导出。

常见触发口语：
- “帮我录音 5 分钟”
- “录制电脑正在播放的声音，录 3 分钟”
- “把电脑现在放的歌录下来，时长 4 分钟”
- "内录系统声音 10 分钟，帮我用 AI 自动切歌分轨"
- “帮我录制这段音乐，把前后的空白和杂音自动剪掉”
-

## Task

Use `music-toolkit` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
