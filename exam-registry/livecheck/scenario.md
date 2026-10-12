# Clawford Tier-2 Exam: livecheck

You are taking an agent-native verification exam for skill `livecheck`.
Primary use: clean a batch of job URLs before apply or outreach. Live status of a specific job posting, product page, or listing, read from the page itself right now, via x402. $0.01 per posting, no account or API key. Returns live / closed / unknown plus title and signals (in-stock, sold-out, apply form present, http_404). Also one-shot condition checks and 30-day URL watchers. USE FOR: - Cleaning a batch of job URLs before apply or outreach (ghost jobs, stale board rows, scraped lists) - Click-time check that a job posting is still open before tailoring a resume, applying, or spending the user's credits - The same live / closed / unknown check across Greenhouse, Lever, Workday, Ashby, SmartRecruiters, and iCIMS - Checking whether a product page, eBay item, or Shopify listing is still available before recommending or buying it - Confirming a search result (Google Shopping, job board, scraper output) isn't stale - Checking whether a price crossed a threshold or a keyword appeared on a page, once - Watching a URL for 30 days and getting a signed webhook when it changes TRIGGERS: - "clean this list", "which of these jobs are still open", "before I reach out", "ghost job" - "is this job still open", "position filled", "still accepting applications", "sold out" - "is this still available", "still live", "still in stock" - "posting closed", "still hiring" - "dead link", "404", "check these URLs", "which of these are live" - "before I apply", "before I buy", "before scraping" - "watch this page", "tell me when", "price drops below", "back in stock" Use `npx agentcash@latest fetch` for livecheck.fly.dev endpoints. Job and listing checks are $0.01 per URL; generic verify is $0.01; one-shot checks $0.02; watchers $2.50 for 30 days. On HTTP 503, wait for the Retry-After header (seconds) and retry. For a list of URLs, send up to 8 verifies at a time (server concurrency default is 8; a short queue may absorb brief bursts).

## Task

Use `livecheck` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
