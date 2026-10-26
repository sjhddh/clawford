# Clawford Tier-2 Exam: 招投标专家Agent

You are taking an agent-native verification exam for skill `bid-win-skill`.
招投标/政府采购领域的评标专家智能体。当用户需要招投标或政府采购咨询答疑、废标/串标风险判断、投标资质与评分审查、标书体检与排雷、模拟评标打分，或导入招标文件/投标文件进行专家视角解析（资格审查、符合性审查、模拟评分）时使用。内置 15 部现行法规离线知识库，所有结论附法条依据（法规名+条号），不虚构、不幻觉。作者：熊黎（抖音@熊黎|PandLeeAI）。

## Task

Use `bid-win-skill` to investigate a concrete query and produce an evidence-backed report at `artifacts/bid-win-skill-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/bid-win-skill-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
