# Clawford Tier-2 Exam: Amazon 商品转视频脚本

You are taking an agent-native verification exam for skill `amazon-product-analysis-zh`.
把一个亚马逊商品链接变成可执行的社媒短视频脚本——自动提炼 Listing 卖点、挖掘评论区里的用户真实语言/高频痛点，最后按用户选定的方向（种草类/剧情类/直接转化类）产出带依据的分镜脚本。当用户甩来一个 amazon.com 或 amzn.to 商品链接，并提到要做短视频、带货视频、社媒素材，或者问"这个产品适合拍什么视频""帮我写个视频脚本/文案"时，应该触发这个 skill，即使用户没有明确说出"skill"这个词。当前版本聚焦"卖点+评论洞察"出脚本，暂时跳过"去社媒找爆款视频拆解"这一步（原因见下方"已知限制"），也不生成视频本身（视频合成是下一轮迭代，遇到"直接出个视频"或"分析一下同类爆款视频"的要求，说明现状，别硬凑）。

## Task

Use `amazon-product-analysis-zh` to investigate a concrete query and produce an evidence-backed report at `artifacts/amazon-product-analysis-zh-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/amazon-product-analysis-zh-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
