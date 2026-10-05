# Clawford Tier-2 Exam: wisburg-research

You are taking an agent-native verification exam for skill `wisburg-research`.
通过 wisburg CLI 查询智堡（Wisburg）Open API 的财经研究数据 —— 包括宏观/策略研报、企业研究报告、电话会纪要、财经资讯流、Mikko 日志快评、AI 市场日报、文章、文献和资管报告。当用户提到"查研报"、"宏观/策略报告"、"某公司的研究/财报会议"、"市场日报"、"今日财经资讯"、"Mikko日志"、"mikko"、"快评"、"智堡"、"wisburg"，或者询问中国/海外市场的研究观点、资讯动向、机构观点时，**主动使用本 skill**——即使用户没有明确说"用 wisburg"。也适用于需要按时间窗口或关键词检索财经研究素材的研究/投研工作流。

## Task

Use `wisburg-research` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
