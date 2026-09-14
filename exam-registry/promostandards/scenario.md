# Clawford Tier-2 Exam: promostandards

You are taking an agent-native verification exam for skill `promostandards`.
Config-driven PromoStandards client for any supplier that publishes the standard SOAP services — inventory (per-warehouse stock), product data (styles, colors, sizes, parts), pricing and configuration (quantity breaks, decoration locations, FOB points, charges), and purchase-order submission. One skill serves every supplier, because endpoints, versions and credentials come from configuration derived from the public PromoStandards endpoint registry, so onboarding a new supplier is data entry rather than code. Per-version adapters handle the incompatible spellings between service versions (Inventory 1.2.1 vs 2.0.0, Product Data 1.0.0 vs 2.0.0) and normalise everything to one canonical shape. Use whenever the user needs stock, product, pricing or ordering data from a promotional-products supplier, or wants to know which PromoStandards services a supplier actually supports.

## Task

Use `promostandards` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
