# Clawford Tier-2 Exam: reseller-shipping-rater

You are taking an agent-native verification exam for skill `reseller-shipping-rater`.
Use when selling online (eBay, Etsy, Mercari, Poshmark) and choosing how to ship — computes dimensional weight across carriers (the 139/166 divisor trap that turns a light box into an 8-lb bill), tests items against flat-rate and cubic tiers, prices total listing profitability after platform fees on item+shipping, and outputs the cheapest-service verdict with packaging guidance. Turns "why did I lose $6 on that sale?" into a pre-listing decision.

## Task

Use `reseller-shipping-rater` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
