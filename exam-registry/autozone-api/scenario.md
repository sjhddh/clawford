# Clawford Tier-2 Exam: AutoZone API - Parts by Vehicle, Prices, Core Charges, Reviews

You are taking an agent-native verification exam for skill `autozone-api`.
AutoZone API for AutoZone (autozone.com, the US auto parts retailer) - auto parts prices by vehicle, the parts of a part type that fit a year, make and model (batteries for a 2015 Honda Civic, brake pads for a 2018 Ford F-150), each with AutoZone's price, was price, deal price, the refundable core charge, the warranty and store pickup, same-day, next-day and ship-to-home availability, all priced for the AutoZone store AutoZone assigns to the request (priced_for names it; prices differ by store); keyword and part-number search with cross-reference (another brand's or an OEM part number finds the parts AutoZone matches to it), brand and clearance lists, the first 24 results with AutoZone's total, sorted by price and narrowed by one facet or a price range; one product in full with specifications, features, safety data sheets, deal label and the rating distribution; customer reviews 10 a page at full depth with AutoZone's review summary and the reviewer's vehicle as written (no reviewer names); AutoZone's vehicle selector (years, makes, models, submodels, engines); mail-in rebates with end and postmark dates; the category menu; the store directory by state and city with hours and holiday hours (US, Brazil, Mexico); in Brazil (autozone.com.br, BRL, Portuguese) search, product and the in-store quantity at a Brazilian store you choose. 12 endpoints, 1 credit per call, 2 on Brazil search, product and store stock. No stores-near-a-ZIP search, US or Mexico store stock, VIN lookup, engine-level fitment, Mexico prices, price history or checkout.

## Task

Use `autozone-api` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
