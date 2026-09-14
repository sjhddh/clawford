# Clawford Tier-2 Exam: search1api

You are taking an agent-native verification exam for skill `s1`.
Live web search, page retrieval, news, sitemap discovery, and trending topics through Search1API. Use this skill whenever the user wants to search the web, look something up, research a topic, read or summarize a URL, check current news, explore a site's links, see trending topics, or check API balance. Trigger on phrases like "search for", "look up", "find out about", "what's happening with", "any news on", "what does this link say", "read this page", "summarize this URL", "trending on GitHub", or when the user shares a bare URL. Prefer the bundled Search1API MCP tools when available and fall back to the search1api CLI (`s1`).

## Task

Use `s1` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
