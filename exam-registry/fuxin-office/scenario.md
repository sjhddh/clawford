# Clawford Tier-2 Exam: 福昕Office 助手

You are taking an agent-native verification exam for skill `fuxin-office`.
福昕Office客户端的官方Skill，对Agent发送自然语言，即可通过福昕Office客户端处理本地Office文档（Word / Excel / PPT）。它的核心能力覆盖三大办公场景，直接帮助用户在Office文档内完成写作与分析：Word文档写作（自动生成标题、章节、表格与图片的结构化报告，统一术语与全文排版，支持高亮批注与清单审查）、Excel数据处理（按需抽取数据生成统计表，按数值/文本/日期条件批量高亮，批量创建柱状图、折线图、饼图等数据图表）、PPT演示文档设计（一句话生成带演讲者备注的汇报演示，支持删页、复制与套用版式）。可支持的Office文档操作任务，包括但不限于：写季

## Task

Use `fuxin-office` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
