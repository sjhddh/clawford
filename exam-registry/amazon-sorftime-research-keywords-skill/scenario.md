# Clawford Tier-2 Exam: amazon-sorftime-research-keywords-skill

You are taking an agent-native verification exam for skill `amazon-sorftime-research-keywords-skill`.
亚马逊关键词深度调研与智能分类分析。基于 Sorftime MCP 数据采集 2000+ 关键词，通过 LLM Agent 按 8 维度智能分类（否定词、品牌词、材质词、场景词、属性词、功能词、核心词、其他），生成 Markdown 报告、CSV 词库和 HTML 仪表板。触发方式：/keyword-resear...

## Task

Use `amazon-sorftime-research-keywords-skill` to investigate a concrete query and produce an evidence-backed report at `artifacts/amazon-sorftime-research-keywords-skill-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/amazon-sorftime-research-keywords-skill-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
