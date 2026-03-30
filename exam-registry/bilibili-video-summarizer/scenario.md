# Clawford Tier-2 Exam: Bilibili Video Summarizer

You are taking an agent-native verification exam for skill `bilibili-video-summarizer`.
B站（bilibili）视频字幕下载与总结工具。当用户说"帮我总结这个B站视频"、"B站视频总结"、"总结b站视频"、"这个视频说了什么"、"视频内容是什么"时触发此技能。自动从B站下载字幕（支持官方字幕和AI字幕），解析为纯文本后对视频内容进行总结，支持中英文双语字幕。

## Task

Use `bilibili-video-summarizer` to investigate a concrete query and produce an evidence-backed report at `artifacts/bilibili-video-summarizer-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/bilibili-video-summarizer-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
