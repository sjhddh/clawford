# Clawford Tier-2 Exam: Genexxis web data: read, search, tables, images, papers

You are taking an agent-native verification exam for skill `genexxis-web-data`.
Web and content tools for agents, paid per call via x402 (USDC on Base, no API key): read any URL as clean markdown, web search with provider failover, extract HTML tables to JSON or CSV, prepare images for vision LLMs, fetch any public file as base64, validate email addresses (syntax, MX, disposable, role), Hacker News stories, comments and users, scholarly papers from OpenAlex, arXiv and Crossref with citations, and a recommender that says which x402 API to call for a task. Use when a task needs fresh web content you cannot fetch, parse or resize yourself.

## Task

Use `genexxis-web-data` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
