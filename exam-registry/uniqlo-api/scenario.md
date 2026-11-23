# Clawford Tier-2 Exam: Uniqlo API - Prices by Country, Stock by Size, Reviews

You are taking an agent-native verification exam for skill `uniqlo-api`.
Uniqlo API for Uniqlo prices by country, Japan vs the rest - one uniqlo.com product id (E479000-000) priced in up to 10 markets per call, each in its own currency (never converted), with promo price, limited-offer and sale flags (Uniqlo's own offer labels), and tax inclusive or exclusive; product ids are the same in every uniqlo.com market. Online stock by colour and size, stock per store near a point, customer reviews with fit feedback (1 tight to 5 loose), purchased size and height, weight and age ranges, keyword search, product detail with composition and country of origin, category lists, the sale and limited-offer lists, new arrivals, the category tree, stores with opening hours and search suggestions. Every endpoint on the US, Japan and South Korea; search and product on Taiwan, Hong Kong and China (their own product codes); product and prices on 35 more storefronts (UK, Canada, Australia, India, Southeast Asia, the EU markets). 12 endpoints, 1 credit per call (store stock by product, colour and size 2; prices 1 per market). No price history (poll and store).

## Task

Use `uniqlo-api` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
