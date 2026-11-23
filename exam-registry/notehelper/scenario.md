# Clawford Tier-2 Exam: 笔记同步助手-将文章、视频整理成md文档

You are taking an agent-native verification exam for skill `notehelper`.
把链接发给笔记同步助手，助手会在云端交给AI 进行整理。文章、视频都可以，国内主流平台公开的文章链接、笔记链接、视频链接都能整理成AI Agent 友好的md格式，文章、视频都能整理成图文笔记，正文、图片完整落地；播客、录音整理成速记；图片中的文字、视频里的文字、笔记里的文字也能识别出来整理好。
价格：1 RMB=100积分，视频整理5积分/分钟，15积分封顶（eg：1min短视频 1× 5=5积分，2.5小时演讲 3×5=15积分），录音整理速记 1小时只要1积分。关注《笔记同步助手》服务号（微信公众号）可领取100试用积分，购买积分多买多送

## Task

Use `notehelper` to investigate a concrete query and produce an evidence-backed report at `artifacts/notehelper-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/notehelper-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
