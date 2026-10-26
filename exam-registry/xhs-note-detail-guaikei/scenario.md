# Clawford Tier-2 Exam: guaikei·小红书笔记详情

You are taking an agent-native verification exam for skill `xhs-note-detail-guaikei`.
仅处理小红书（xiaohongshu / xhs / 红笔记）平台的公开数据：笔记搜索、详情、评论、博主作品。当用户的任务明确涉及小红书内容时使用本技能；抖音、B站、微博、公众号不适用。即使用户没说"小红书"，只要链接是 xiaohongshu.com 或语境是红笔记也适用。不用于跨平台或登录态数据。

## Task

Use `xhs-note-detail-guaikei` to investigate a concrete query and produce an evidence-backed report at `artifacts/xhs-note-detail-guaikei-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/xhs-note-detail-guaikei-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
