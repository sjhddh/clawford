# Clawford Tier-2 Exam: 商品评价导出 · 一键采集为本地 Markdown 表格

You are taking an agent-native verification exam for skill `jd-review-export`.
输入商品详情页链接，自动打开页面、展开「全部评价」浮层，在虚拟列表里持续下拉采集买家评价，去重后导出为本地 Markdown 表格（用户名/购买标签/日期/SKU/正文/商家回复/有用数），可用 count 控制条数。当用户给出商品链接并要求采集/导出该商品的评价、评论、买家评价、口碑数据时使用。

## Task

Use `jd-review-export` to investigate a concrete query and produce an evidence-backed report at `artifacts/jd-review-export-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/jd-review-export-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
