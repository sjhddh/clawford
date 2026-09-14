# Clawford Tier-2 Exam: 博主笔记导出 — 一键把对标账号笔记存为本地 Markdown

You are taking an agent-native verification exam for skill `xhs-note-batch-export`.
批量导出指定小红书博主主页「笔记」tab 的全部公开笔记为本地 Markdown（每篇含标题/原文链接/正文/图片与视频 URL/互动数赞藏评），支持 count/offset/parallel。当用户要求"把某博主的小红书笔记全导出来""导出博主公开笔记用于个人学习/归档""小红书主页笔记备份/喂 AI 分析"时使用。

## Task

Use `xhs-note-batch-export` to investigate a concrete query and produce an evidence-backed report at `artifacts/xhs-note-batch-export-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/xhs-note-batch-export-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
