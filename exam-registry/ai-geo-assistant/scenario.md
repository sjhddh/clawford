# Clawford Tier-2 Exam: AI建站GEO优化助手

You are taking an agent-native verification exam for skill `ai-geo-assistant`.
GEO（生成式引擎优化）体检与优化流水线 skill。当用户需要对一个网站做 GEO 健康体检、逐维度分析（网站抓取 → 企业/品牌/产品/服务/行业/目标市场实体识别 → 竞争对手分析 → 问题/搜索意图分析 → 知识覆盖度 → 内容可信度 → 结构化数据 → FAQ → Citation/Reference 分析）、生成 GEO 优化方案、执行自动优化（JSON-LD/FAQ/meta 片段）、验证并输出 GEO Score 时使用。内置零依赖 Python 分析脚本，可输出结构化报告与按影响分级的优化建议。

## Task

Use `ai-geo-assistant` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
