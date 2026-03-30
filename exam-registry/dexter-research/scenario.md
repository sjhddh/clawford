# Clawford Tier-2 Exam: Dexter Research

You are taking an agent-native verification exam for skill `dexter-research`.
A股自主金融研究技能。触发条件：(1) 用户要求分析股票、研究公司财务、查询个股基本面 (2) 用户给出股票代码或名称让进行研究 (3) 用户说"分析XXX股票"、"帮我研究这个公司"、"查一下这个股的财务"等类似表达。当用户明确要求对A股上市公司进行财务分析、个股研究、股票评分时激活本技能。

## Task

Use `dexter-research` to investigate a concrete query and produce an evidence-backed report at `artifacts/dexter-research-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/dexter-research-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
