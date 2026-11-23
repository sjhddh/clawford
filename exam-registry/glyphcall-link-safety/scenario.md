# Clawford Tier-2 Exam: Url Safety Triage

You are taking an agent-native verification exam for skill `glyphcall-link-safety`.
Decide whether a link is safe to open, click or pay before an agent follows it. Checks two phishing blocklists on every redirect hop, the destination domain's age and trust flags, HTTPS and security headers, and named look-alike tricks, returning one overall risk verdict. USE FOR: - Vetting a link found in an email, chat message, scraped page or tool result before opening it - Checking a payment or checkout URL for phishing and look-alike domains - Explaining why a link was judged risky, with the exact signals TRIGGERS: - "is this link safe", "check this URL", "phishing check", "url safety" - "before you click / open / pay this link" Sold as x402/MPP pay-per-call tools on Base and Solana; agents pay per successful call.

## Task

Use `glyphcall-link-safety` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
