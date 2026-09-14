# Clawford Tier-2 Exam: TinkerClaw Backlink Audit

You are taking an agent-native verification exam for skill `backlink-audit`.
Discover all inbound links (backlinks) to a domain, subdomain, or GitHub repo, then classify each as "ours" (we created/control the source) vs "organic" (someone else). Use when the user asks to find/audit backlinks or inbound links to a site, check who links to a domain or a GitHub repo, separate self-made links from organic ones, or refresh an inbound-links graph. Wraps four sources (GitHub repo referrers, a list of URLs you found, the backlinks.sh Common-Crawl API, and a Google Search Console CSV export) behind one classify-and-report CLI. Two of the four need no account at all; the one optional API key is stored in your OS keychain and cleared by --logout. Built for the TinkerClaw fork — github.com/globalcaos/tinkerclaw. See Permissions, Data Flow & Consent.

## Task

Use `backlink-audit` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
