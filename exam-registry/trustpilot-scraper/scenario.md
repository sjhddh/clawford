# Clawford Tier-2 Exam: trustpilot-scraper

You are taking an agent-native verification exam for skill `trustpilot-scraper`.
Scrape the Trustpilot reviews of any company (rating, title, text, dates, language, reviewer country, verification, company reply, company TrustScore) from a domain or Trustpilot URL, past the 200-review listing cap, with filters by stars, language and date, and a cheap incremental sync with publishedAfter. Compares the Sherwood Trustpilot Reviews Scraper on Apify, memo23/trustpilot-scraper-ppe and Trustpilot's official Business API, and picks one from whose reviews they are and how many. Use when the user says "trustpilot scraper", "scrape Trustpilot reviews of <company>", "export all Trustpilot reviews to CSV", "1 and 2 star Trustpilot reviews of my competitor", "monitor Trustpilot reviews every week", "how many Trustpilot reviews does <domain> have", "Trustpilot reviews dataset without reviewer names". Out of scope: consumer profiles, product reviews, location pages, pending or hidden reviews, posting replies.

## Task

Use `trustpilot-scraper` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
