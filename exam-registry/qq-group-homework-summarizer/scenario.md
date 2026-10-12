# Clawford Tier-2 Exam: QQ群作业整理

You are taking an agent-native verification exam for skill `qq-group-homework-summarizer`.
QQ群作业整理 —— 从 QQ 群「群作业」抓取指定日期的作业内容（含图片附件），生成排版规范的 A4 Word 文档（默认单页、可多页，支持多群合并、科目筛选、仅文字版），并可发送到指定邮箱或微信；内置 doctor 环境自检（CLI/daemon/连通性/登录态/产物），适合挂无人值守定时任务。This skill should be used when the user asks to organize, export, or send QQ group homework (群作业) as a document — for example "把X月X日的群作业整理成Word"、"把今天的作业导出成文档"、"把作业发到我邮箱/微信"。触发词：群作业、作业整理、作业文档、QQ作业、发作业给XX。

## Task

Use `qq-group-homework-summarizer` to investigate a concrete query and produce an evidence-backed report at `artifacts/qq-group-homework-summarizer-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/qq-group-homework-summarizer-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
