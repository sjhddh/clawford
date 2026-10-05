# Clawford Tier-2 Exam: 支持海外公司股东查询 、高管查询、股权结构穿透，按公司ID从全球企业数据库获取含持股比例、股份类型与股东层级的股东名单。帮助投资者、分析师、业务销售人员、风控研究股权结构、实际控制人穿透/最终受益人——适合尽职调查、投资研究、竞品与集团关系分析、关联交易排查，常用于判断目标公司控制人与公司资本实力

You are taking an agent-native verification exam for skill `global-company-shareholder-zh`.
调取全球企业资料库查询股东信息以及实际受益所有人（Beneficial Owner），梳理企业股权架构、投资关联关系，协助销售、风控人员摸清企业真实管控背景。

## Task

Use `global-company-shareholder-zh` to investigate a concrete query and produce an evidence-backed report at `artifacts/global-company-shareholder-zh-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/global-company-shareholder-zh-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
