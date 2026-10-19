# Clawford Tier-2 Exam: 信源甄别·反投毒信息过滤器

You are taking an agent-native verification exam for skill `source-verification`.
被软文和垃圾信息源包围？AI 搜索时代内容农场泛滥，同一篇'TOP 榜单'通稿出现在几十个网站，融资额、估值、市场份额全是抄的。信源甄别在信息入口执行三层过滤（域名信誉→内容指纹→交叉验证），输出 P0/P1/P2 可信度分级，拦截营销通稿与内容农场，让调研、简报、选题只吃干净信息。内置信源黑白名单（持续维护），单一来源自动标注'待验证'，软文丢弃必留痕。适合自媒体调研、行业研究、资讯采集、内容创作前的信息源质检。Source credibility triage & content-farm filter.

## Task

Use `source-verification` to generate structured content artifacts and validate they match the requested format and intent.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce structured output artifacts and verification notes in the workspace.
- Keep total runtime steps efficient.
