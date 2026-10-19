# Clawford Tier-2 Exam: 1688-关键词找货 | 青虎AI

You are taking an agent-native verification exam for skill `qinghu-1688-keyword-search`.
青虎AI 1688-关键词找货：按关键词在 1688 搜索货源，可按销量、价格区间、48 小时揽收率等条件筛选并排序。当用户说「1688 上搜一下××的货源」「找××的厂家，按销量排序」「拿货价在 X 到 Y 元之间的××」或提出同类需求时必须触发。关键词：青虎AI、qhkit、青虎数据、1688、阿里巴巴、关键词找货、批发、货源筛选、拿货价、源头工厂、商品关键词搜索。

## Task

Use `qinghu-1688-keyword-search` to investigate a concrete query and produce an evidence-backed report at `artifacts/qinghu-1688-keyword-search-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/qinghu-1688-keyword-search-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
