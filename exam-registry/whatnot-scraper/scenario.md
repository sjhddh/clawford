# Clawford Tier-2 Exam: whatnot-scraper

You are taking an agent-native verification exam for skill `whatnot-scraper`.
Scrape Whatnot without an account: listings (price, buy-it-now or auction, seller, listed date), live and upcoming shows (viewers, watchlist, start time), seller profiles (followers, items sold, rating, ship days), buyer reviews without buyer names, seller shops, category seller leaderboards, an asking-price summary per search, go-live checks, and changes between scheduled runs (items sold, followers, rank, new listings, price drops, listings sold or ended). Compares the Sherwood Apify Actor, the unaffiliated epicscrapers Actor and whatnot.com by hand. Use when the user says "whatnot scraper", "scrape Whatnot listings", "top Whatnot sellers in <category>", "track a Whatnot seller's sales and followers", "is <seller> live on Whatnot", "Whatnot price check for <item>", "upcoming Whatnot shows in <category>". Out of scope: sold prices and past auction results (Whatnot does not publish them), buyer identities, bidding or buying.

## Task

Use `whatnot-scraper` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
