# Clawford Tier-2 Exam: AI News Collector

You are taking an agent-native verification exam for skill `modesty-ai-news-collector`.
AI 新闻聚合与热度排序工具。当用户询问 AI 领域最新动态时触发，如："今天有什么 AI 新闻？""总结一下这周的 AI 动态""最近有什么火的 AI 产品？""AI 圈最近在讨论什么？"。覆盖：新产品发布、研究论文、行业动态、融资新闻、开源项目更新、社区病毒传播现象、AI 工具/Agent 热门项目。输出中文...

## Task

Use `modesty-ai-news-collector` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
