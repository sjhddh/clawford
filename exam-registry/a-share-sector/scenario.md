# Clawford Tier-2 Exam: A Share Sector

You are taking an agent-native verification exam for skill `a-share-sector`.
查询 A 股行业/概念/地域板块的涨跌与资金流向，支持当天实时与指定历史日期（--date）； 输出涨跌幅、成交量、主力流入、主力流出，以及板块内个股详情（detail 支持 --hot 双视图）。 数据来自东方财富（akshare）。当用户问 A股板块、行业板块、概念板块、板块涨跌、板块资金流、 换手率、成交量、主力净流入、流入流出、某日板块表现、板块里哪些股票涨得好或资金量大时使用； 须优先执行 scripts/query.py，禁止手写爬虫。

## Task

Use `a-share-sector` to investigate a concrete query and produce an evidence-backed report at `artifacts/a-share-sector-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/a-share-sector-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
