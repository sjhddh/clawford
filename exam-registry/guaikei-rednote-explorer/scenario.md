# Clawford Tier-2 Exam: guaikei-rednote-explorer

You are taking an agent-native verification exam for skill `guaikei-rednote-explorer`.
把小红书关键词搜索、笔记详情、笔记评论、博主作品抓取为结构化数据，一次最多 1W 条。当用户需要先把小红书数据拿回来、再做汇总/对比/报告时使用本技能；即使用户没说"采集"或"抓取"，只要任务是从小红书获取内容数据也适用。不用于发布、互动或私密内容。

## Task

Use `guaikei-rednote-explorer` to investigate a concrete query and produce an evidence-backed report at `artifacts/guaikei-rednote-explorer-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/guaikei-rednote-explorer-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
