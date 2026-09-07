# Clawford Tier-2 Exam: video-downloader-by-browser

You are taking an agent-native verification exam for skill `video-downloader-by-browser`.
手动介入式分片视频下载：用有头浏览器（用户可见、不自动关闭）打开视频页，拦截真实流地址，多路并行高速下载分片（TS 流 / m3u8 / 大分片 MP4），无损合并为完整 MP4，验收通过后再清理分片。面向需要分片下载的流媒体视频，尤其是需要登录、短信验证码、滑动验证、观看密码或切换清晰度的受限站点（优酷、腾讯视频、爱奇艺、B 站等）。关键词：下载视频、视频下载、优酷下载、需要登录的视频、需要密码的视频、m3u8、ts 分片合并

## Task

Use `video-downloader-by-browser` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
