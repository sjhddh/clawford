# Clawford Tier-2 Exam: 公告速览·A股

You are taking an agent-native verification exam for skill `cue-announcement-daily-cn`.
A股公告速览：输入一家公司名／六位代码或一份自选清单，产出当日（或指定日期窗内）公告的逐条要点清单——每条带公告标题＋披露日期＋关键数逐字，同类事项自动串成前后两条对照，缺的点名「未检索到」。评级、目标价、走势判断一律 [待人工]，不预测、不代下单。Do NOT use for: 投资建议或买卖决策、未检索到的公告编造或补全、收益与风险承诺。Triggers: 今天有什么公告 / 当日公告 / 公告清单 / 公告速览 / 这周发了什么 / 自选清单公告； daily announcement digest / A-share filing list

## Task

Use `cue-announcement-daily-cn` to investigate a concrete query and produce an evidence-backed report at `artifacts/cue-announcement-daily-cn-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/cue-announcement-daily-cn-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
