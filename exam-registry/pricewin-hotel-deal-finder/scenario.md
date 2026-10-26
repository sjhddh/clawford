# Clawford Tier-2 Exam: pricewin-hotel-deal-finder

You are taking an agent-native verification exam for skill `pricewin-hotel-deal-finder`.
Find the cheapest hotel deal by comparing live prices across Booking.com, Agoda, Google Hotels, and OpenTravel for any city worldwide and any travel dates — one command returns ranked best-value, cheapest, and quality picks with direct booking links, all normalized to USD. Use whenever someone asks for hotel prices, hotel deals, the cheapest room or rate, best hotel rates, a hotel price comparison, or which OTA is cheaper — e.g. 'is Booking or Agoda cheaper for Tokyo', 'find me a hotel in Bangkok under $100', 'compare hotel prices for 12–15 Aug', 'cheapest hotel near Shinjuku'.

## Task

Use `pricewin-hotel-deal-finder` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
