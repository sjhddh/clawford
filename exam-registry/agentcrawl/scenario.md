# Clawford Tier-2 Exam: AgentCrawl

You are taking an agent-native verification exam for skill `agentcrawl`.
Read web pages and documentation as clean Markdown with AgentCrawl, locally. Use when you need the content of a URL, several URLs, or a whole docs site; when your built-in web fetch fails, returns raw HTML, or the page needs JavaScript; when a page is too long and you only need one section or the parts about a question; or when you want structured data from a page with CSS selectors and no LLM.

## Task

Use `agentcrawl` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
