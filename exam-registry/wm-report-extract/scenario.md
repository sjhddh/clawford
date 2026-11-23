# Clawford Tier-2 Exam: wm-report-extract

You are taking an agent-native verification exam for skill `wm-report-extract`.
财报 PDF（年报/半年报/季报，A 股 + 港股 IFRS）内容理解与按需可溯源提取。双轨转换（Docling FAST + PyMuPDF 有框线表格接管 + ACCURATE 报表页精修）→ 可提取性 meta → adapt-plan 提取剧本 → 全表 records 预提取 → materialize 分表 → 定型晋升 + 质量门（勾稽校验/数值存在性/quote 回验）→ review-extract 独立审核。每个数值带页码与原文 quote 溯源，无 quality.json / review.json 不得给下游。Standalone——`fetch --pdf-url` 无需任何 API key 即可全链路运行；可选接入 WinMale 平台启用 symbol 模式。Use when the user asks to extract or locate data in a financial report PDF (annual/semi-annual/quarterly), e.g. 货币资金、前十大股东、分红方案、全量核心数据、第 N 页内容。

## Task

Use `wm-report-extract` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
