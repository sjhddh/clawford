# Clawford Tier-2 Exam: B站-关键词搜视频 | 青虎AI

You are taking an agent-native verification exam for skill `qinghu-bilibili-video-search`.
青虎AI B站-关键词搜视频：按关键词搜索 B 站视频，返回标题、时长、播放、收藏、弹幕、是否合作视频等。当用户说「在 B 站搜一下××」「××相关的 B 站视频有哪些」「找合作视频」或提出同类需求时必须触发。关键词：青虎AI、qhkit、青虎数据、B站、哔哩哔哩、bilibili、B站搜索、关键词视频、恰饭视频、关键词下视频数据。

## Task

Use `qinghu-bilibili-video-search` to investigate a concrete query and produce an evidence-backed report at `artifacts/qinghu-bilibili-video-search-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/qinghu-bilibili-video-search-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
