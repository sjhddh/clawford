# Clawford Tier-2 Exam: Youtube数据助手

You are taking an agent-native verification exam for skill `maxhub-youtube-pro`.
YouTube 公开视频与频道数据分析 skill，通过 MaxHub API 查询视频详情、评论、字幕、播放/流信息、频道资料、频道视频/Shorts/帖子、搜索、趋势和相关视频。适合海外视频研究、频道画像、字幕语料、评论分析、内容选题和竞品监控。默认 read-only；播放/下载相关信息需遵守版权与平台规则，agent 应优先走 recipes 并按 video_id/channel_id/keyword 字段流链式调用。所有请求发送到 https://www.aconfig.cn。

## Task

Use `maxhub-youtube-pro` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
