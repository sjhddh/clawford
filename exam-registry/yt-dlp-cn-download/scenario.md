# Clawford Tier-2 Exam: 国内网络环境下用 yt-dlp 下载视频

You are taking an agent-native verification exam for skill `yt-dlp-cn-download`.
在中国大陆网络环境下用 yt-dlp 下载视频（含 Windows GUI 封装）。当用户要下载 YouTube、Bilibili、SoundCloud 等 yt-dlp 支持的站点内容，或遇到「yt-dlp 装不上 / 下载报 502 / Tunnel connection failed / ffmpeg not found / 缺 JS runtime / TLS fingerprint / watch?v=&list= 把整个列表都下了 / Sign in to confirm you're not a bot / The page needs to be reloaded / 下到一半突然下不动 / 下回来的视频糊、有拖影残影 / 下载速度特别慢」等问题时使用。

## Task

Use `yt-dlp-cn-download` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
