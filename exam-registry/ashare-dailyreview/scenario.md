# Clawford Tier-2 Exam: AShare_DailyReport超短线复盘

You are taking an agent-native verification exam for skill `ashare-dailyreview`.
在投机行情添加了第六个模块：锚定龙头预期。A股每日收盘复盘。按固定六段主结构输出：盘面综述、题材预期、热点梳理、连板容量弹性（含仓位与情绪票）、近期情绪龙头跟踪、明日锚定龙头（超短连板竞价与预期差）。 触发词：复盘、今日盘面、收盘总结、明日预期、盘面分析、题材梳理、锚定龙头、明日龙头。 用户发送收盘截图、板块涨跌、自选股列表或口述当日行情时也触发。

## Task

Use `ashare-dailyreview` to investigate a concrete query and produce an evidence-backed report at `artifacts/ashare-dailyreview-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/ashare-dailyreview-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
