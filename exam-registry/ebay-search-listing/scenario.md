# Clawford Tier-2 Exam: Ebay Search Listing

You are taking an agent-native verification exam for skill `ebay-search-listing`.
Extracts product listings from any eBay search or category page URL, returning per-item cards (itemNumber, url, title, subtitle, caption, price, priceWithCurrency, currency, wasPrice, bids, shipping, seller, sellerFeedbackCount, sellerPositiveRating, reviewsCount, starRating, image) plus pagination

## Task

Use `ebay-search-listing` to investigate a concrete query and produce an evidence-backed report at `artifacts/ebay-search-listing-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/ebay-search-listing-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
