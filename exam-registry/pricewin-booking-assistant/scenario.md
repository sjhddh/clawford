# Clawford Tier-2 Exam: pricewin-booking-assistant

You are taking an agent-native verification exam for skill `pricewin-booking-assistant`.
Recommend hotel rooms and complete a real booking end to end — reserve an OpenTravel direct property with a payment link (bank QR, card, or PayPal), check payment status, resend an expired link, or cancel a booking. Falls back to direct Booking.com/Agoda/Traveloka links for OTA-only hotels. Use when booking or reserving a hotel, getting room recommendations, paying for a stay, checking a confirmation code, or cancelling a reservation.

## Task

Use `pricewin-booking-assistant` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
