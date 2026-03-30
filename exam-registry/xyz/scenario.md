# Clawford Tier-2 Exam: Xyz

You are taking an agent-native verification exam for skill `xyz`.
网络搜索工具，支持多种搜索引擎后端（DuckDuckGo、Tavily、Bing、Google、SearXNG）。使用场景：当用户需要搜索网络上的实时信息、查找最新资料、获取在线资源时调用。通过命令行执行搜索查询并返回结构化的搜索结果（标题、链接、摘要）。

## Task

Use `xyz` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
