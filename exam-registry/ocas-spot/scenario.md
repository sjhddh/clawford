# Clawford Tier-2 Exam: Spot

You are taking an agent-native verification exam for skill `ocas-spot`.
Use when checking appointment availability, booking services, monitoring for openings, or discovering venues at salons, spas, and restaurants. spot.discover finds and compares venues via Yelp before booking. Supports Acuity Scheduling, Square Appointments, Resy, Tock, SevenRooms, OpenTable, Meevo, Vagaro, Mindbody, Fresha, StyleSeat, Calendly, Yelp Reservations, Booksy, GlossGenius, SimplyBook.me, Boulevard, Mangomint, DaySmart, ResDiary, and Eat App. Integrates with ocas-vpn for bot block bypass. NOT for general travel planning (use ocas-voyage), calendar sync (use ocas-sands), restaurant reservations on unsupported platforms. Trigger phrases: 'book an appointment at', 'check availability at', 'when can I get a [service]', 'find me a slot at', 'is [venue] available', 'watch [venue] for openings', 'alert me when [venue] has availability', 'monitor [venue]', 'find a restaurant in', 'compare salons near', 'discover [type] near'.

## Task

Use `ocas-spot` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
