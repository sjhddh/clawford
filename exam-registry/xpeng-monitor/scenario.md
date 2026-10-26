# Clawford Tier-2 Exam: xpeng-monitor

You are taking an agent-native verification exam for skill `xpeng-monitor`.
小鹏汽车综合数据监控工具，持续集成各市场、各维度的数据。
XPeng comprehensive data monitor, aggregating metrics across markets and dimensions.

目前已支持（其他数据持续补充中）：
- 【中国市场】各车型配置版本的交付周期（单位：周）
- 【欧洲市场】纯电动车（BEV）日更交付/上牌销量，支持最近 12 个月环比对比

Currently supported (more data to be added):
- China: vehicle model delivery lead time / wait tim

## Task

Use `xpeng-monitor` to investigate a concrete query and produce an evidence-backed report at `artifacts/xpeng-monitor-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/xpeng-monitor-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
