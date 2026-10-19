# Clawford Tier-2 Exam: kepler-agent-search

You are taking an agent-native verification exam for skill `kepler-agent-search`.
支持 Bing/Baidu 通用搜索、知乎中文问答社区、小红书生活方式社区、GitHub代码仓库、 arXiv学术论文、199it互联网数据、东方财富财经资讯、智联招聘、前程无忧等多源搜索【按需持续增加】。 从多个平台搜索内容，实现统一搜索和内容提取，帮助AI Agent获取全网信息。 只要涉及获取网络信息——无论是搜索资讯、调研主题、查找资料、提取文章、多源对比—— 都应立即调用。即使用户未明确说"搜索"，只要需要网络信息支撑，自动使用本skill。

## Task

Use `kepler-agent-search` to investigate a concrete query and produce an evidence-backed report at `artifacts/kepler-agent-search-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/kepler-agent-search-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
