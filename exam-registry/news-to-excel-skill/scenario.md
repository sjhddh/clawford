# Clawford Tier-2 Exam: 网页新闻关键信息提取器

You are taking an agent-native verification exam for skill `news-to-excel-skill`.
自动提取网页中新闻列表的时间和事件简介，生成Excel。当用户提供包含多篇新闻或活动报道的网址时，逐篇提取时间和一句话信息，整理成第一列为时间、第二列为事件简介的表格，并输出为Excel文件。适用于整理机构月报、新闻汇总、活动记录等场景。

## Task

Use `news-to-excel-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
