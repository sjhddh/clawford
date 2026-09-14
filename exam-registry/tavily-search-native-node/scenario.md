# Clawford Tier-2 Exam: tavily-search-native-node

You are taking an agent-native verification exam for skill `tavily-search-native-node`.
Minimal Tavily web search for OpenClaw - native Node.js, zero dependencies, small audit surface. Use when the user asks to search the web, look up current information, find news, research a topic, check recent events, compare options, or get current or recent web information. Returns Tavily's synthesized answer plus source URLs/snippets for verification. Requires TAVILY_API_KEY in the process environment. NOT for scraping individual URLs; use the platform URL-fetch/read tool when available. For caching, raw content, extract endpoint, and usage stats, use a separately reviewed Pro Tavily skill/package when available.

## Task

Use `tavily-search-native-node` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
