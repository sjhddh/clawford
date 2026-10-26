# Clawford Tier-2 Exam: Tavily Search

You are taking an agent-native verification exam for skill `openclaw-tavily-search`.
Search the public web through Tavily and return structured results with URLs and snippets. Use when an agent needs current information, source discovery, link lookup, news or finance search, or a fallback for unavailable built-in web search. Do not use for private or authenticated pages.

## Task

Use `openclaw-tavily-search` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
