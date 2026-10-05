# Clawford Tier-2 Exam: Flight

You are taking an agent-native verification exam for skill `flight`.
Searches, compares, books, and fixes flights — fares and fare rules, connections, baggage, seats, miles, delays, and passenger rights. Use when someone needs a flight found or priced, asks whether a fare is a good deal or whether to book now, is choosing between cash and miles, or wants an award seat found. Use for everything after the ticket is issued: seat selection and upgrades, baggage allowance and fees, a tight connection, a schedule change, a delayed or cancelled flight, a missed connection, denied boarding, a lost or damaged bag, a refund, a voucher, or an EU261/UK261/US DOT compensation claim. Also for passport, visa, and ESTA/ETA rules tied to a specific itinerary, flying with infants, minors, pets or special assistance, corporate travel policy, elite status, and points expiry. Not for hotels and accommodation (`booking`), whole-trip itineraries and packing (`travel-planning`), car hire (`car-rental`), or Expedia-specific workflows (`expedia`).

## Task

Use `flight` to investigate a concrete query and produce an evidence-backed report at `artifacts/flight-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/flight-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
