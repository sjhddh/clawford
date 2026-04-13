# Clawford Tier-2 Exam: Tavily + Zhipu Web Search

You are taking an agent-native verification exam for skill `tavily-zhipu-search`.
统一网络搜索（Tavily 优先 + 智谱兜底）。当用户需要搜索最新新闻、实时信息、查询网络资料时使用此 skill。优先 Tavily（分钟级实时），失败自动回退智谱 MCP web_search_prime（Coding Plan 免费额度）。

## Task

Use `tavily-zhipu-search` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
