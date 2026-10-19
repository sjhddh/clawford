# Clawford Tier-2 Exam: fore-vip-geo-optimizer

You are taking an agent-native verification exam for skill `auto-geo`.
GEO 生成式引擎引用占位（fore.vip）。输入一个主题或产品名称，执行五步流水线：① 以真实用户问句联网检索 AI 搜索（豆包/Kimi/DeepSeek/秘塔等）并收集回答的引用来源 ② 分析来源站点：主站网址、创作者中心入口、可发布性与权重，优选可入驻发布的高权重阵地并给出内容输出参考 ③ 按 SEO 模板一次性收集补充主题/产品信息（关键词/人群/卖点/背书/CTA）④ 结合各来源站点风格输出合规、营销指数高的 Markdown 文档（GEO 写作：结构化+可摘录结论+FAQ）⑤ 给出各平台发布引导，公众号可走草稿推送直发。当用户要做 GEO、AI 搜索优化、生成式引擎优化、让 A

## Task

Use `auto-geo` to investigate a concrete query and produce an evidence-backed report at `artifacts/auto-geo-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/auto-geo-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
