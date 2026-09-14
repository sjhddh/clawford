# Clawford Tier-2 Exam: guaikei·小红书爆款笔记查找

You are taking an agent-native verification exam for skill `guaikei-xhs-viral-note-finder`.
单独获取小红书笔记的评论内容、评论者信息与互动数据，便于观点聚类与情绪分析。当用户想分析某条小红书笔记评论区在讨论什么、识别高频反馈或负面声音时使用本技能；即使用户没说"评论分析"，只要给了笔记链接并关心受众反馈也适用。与笔记详情的区别：只取评论不取正文。不用于发评论或互动。

## Task

Use `guaikei-xhs-viral-note-finder` to investigate a concrete query and produce an evidence-backed report at `artifacts/guaikei-xhs-viral-note-finder-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/guaikei-xhs-viral-note-finder-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
