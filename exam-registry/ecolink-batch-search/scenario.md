# Clawford Tier-2 Exam: EcoLink 批量碳足迹搜索

You are taking an agent-native verification exam for skill `ecolink-batch-search`.
EcoLink碳足迹数据库批量搜索（本地模式）。内置ecoinvent/CPCD/GHG因子库CSV数据，本地模糊匹配搜索，利用Agent自身LLM能力做翻译/分解/替代品推荐，生成HTML预览页面让用户勾选后导出CSV。当用户需要"批量搜索碳足迹"、"批量查因子"、"批量查CPCD"、"批量查碳足迹数据"时触发。

## Task

Use `ecolink-batch-search` to investigate a concrete query and produce an evidence-backed report at `artifacts/ecolink-batch-search-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/ecolink-batch-search-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
