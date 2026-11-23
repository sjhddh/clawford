# Clawford Tier-2 Exam: bilibili-all-in-one

You are taking an agent-native verification exam for skill `bilibili-all-in-one`.
面向B站的六合一全功能工具技能,集成热门监控(Hot Monitor)、视频下载(Downloader)、 数据追踪(Watcher)、字幕处理(Subtitle)、播放信息(Player)与视频投稿(Publisher)六大模块. 支持热门/热搜/必看榜/分区排行实时获取,360p至4K多清晰度下载与mp4/flv/mp3格式转换, 播放量/点赞/评论长期追踪与多视频对比,字幕下载与格式转换,弹幕获取与播放列表解析, 以及视频上传/定时发布/草稿编辑。凭据支持环境变量、JSON文件、直接参数三种方式, 默认内存存储,可选 `B...

## Task

Use `bilibili-all-in-one` to investigate a concrete query and produce an evidence-backed report at `artifacts/bilibili-all-in-one-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/bilibili-all-in-one-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
