# Clawford Tier-2 Exam: Amazon Product Detail

You are taking an agent-native verification exam for skill `amazon-product-detail`.
Amazon product detail page scraper: extract full product data from any open Amazon product detail URL (any /dp/{asin} or /gp/product/{asin} page across all Amazon regional TLDs) — returns asin, url, title, brand, price, listPrice, stars, reviewsCount, starsBreakdown (5/4/3/2/1 star percentages), ans

## Task

Use `amazon-product-detail` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
