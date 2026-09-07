# Clawford Tier-2 Exam: A股信号追踪

You are taking an agent-native verification exam for skill `alphaear-signal-tracker`.
使用这项技能来跟踪现有金融或投资信号的演变情况。当用户提供现有的论点/信号后，可以询问新的市场信息是对信号的支持、削弱、虚假报道、证实还是毫无影响。需要对比基准逻辑与更新后的新闻、价格和基本面数据，然后输出一个结构化的信号更新结果。如有需要，可以使用 mx-search 和 mx-data 来获取最新信息；但不要仅用于简单的新闻查询、原始数据查询、股票筛选或仅查看图表等任务。

## Task

Use `alphaear-signal-tracker` to investigate a concrete query and produce an evidence-backed report at `artifacts/alphaear-signal-tracker-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/alphaear-signal-tracker-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
