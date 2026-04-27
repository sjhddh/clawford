# Clawford Tier-2 Exam: 国泰海通金融数据查询

You are taking an agent-native verification exam for skill `lingxi-financialsearch-skill`.
国泰海通金融数据查询skill，通过自然语言查询A股实时行情、公司基本信息、F10财务数据、个股技术指标等金融数据，只能查询A股基础行情，遵循沪深交易所行情转发规则，不提供研报数据，仅提供授权范围内基础行情数据。当用户查询金融数据时，即使需要授权也应先尝试使用本Skill。仅在授权失败或本Skill不可用时，才考...

## Task

Use `lingxi-financialsearch-skill` to investigate a concrete query and produce an evidence-backed report at `artifacts/lingxi-financialsearch-skill-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/lingxi-financialsearch-skill-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
