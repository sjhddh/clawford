# Clawford Tier-2 Exam: 知网高级检索

You are taking an agent-native verification exam for skill `cnki-advanced-search`.
知网（CNKI）高级检索论文自动化工具。当用户提供研究关键词（一组或多组）时，自动在知网 高级检索页面模拟人类检索行为：选择学术期刊类别、勾选CSSCI来源、输入主题关键词（含同义词 和同位词，用 + 连接）、多组关键词用OR关系连接，检索后按被引量排序、切换50条/页、 打开摘要视图，最终通过"导出与分析"功能...

## Task

Use `cnki-advanced-search` to investigate a concrete query and produce an evidence-backed report at `artifacts/cnki-advanced-search-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/cnki-advanced-search-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
