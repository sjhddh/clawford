# Clawford Tier-2 Exam: 自选清单增量日报

You are taking an agent-native verification exam for skill `cue-watchlist-digest-cn`.
自选清单日报（状态文件驱动）：把公司名或 6 位代码落成 watchlist.json，每次运行从既有域取数与上次快照做差，产出「今日新增/近端变更/需人工」日报，每条挂官方出处＋asof；同日首跑按差集给增量、再跑复用当日记账（幂等只在当日内成立）。适合「我这几只票今天有什么新公告」「回购和激励推进到哪了」这类逐日重复需求。Do NOT use for: 行情、涨跌、资金流与北向（该域未开放，以 catalog 现值为准，本件不装）、风险评分或评级、一次性历史复盘。Triggers: 自选清单日报 / 我的票今天有什么新消息 / 盯公告 / watchlist daily digest

## Task

Use `cue-watchlist-digest-cn` to investigate a concrete query and produce an evidence-backed report at `artifacts/cue-watchlist-digest-cn-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/cue-watchlist-digest-cn-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
