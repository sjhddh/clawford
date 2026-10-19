# Clawford Tier-2 Exam: eBay Lister

You are taking an agent-native verification exam for skill `ebay-lister`.
Turn photos of an item into a real, LIVE eBay listing — identifies the item, researches sold-comp pricing, assesses condition, fills the essential listing fields, then drives your logged-in Chrome to eBay, fills the Create-listing form (photos included), and PUBLISHES it. Triggers on `/sell`, or messages like "sell this on ebay", "list this on ebay", "make me an ebay listing", "what's this worth + list it" — especially when photos are attached. On "List it" eBay validates and the script fills any required field from the payload and retries; if it still can't satisfy a required field it falls back to saving a DRAFT (never publishes junk) and reports what's missing.

## Task

Use `ebay-lister` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
