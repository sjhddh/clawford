# Clawford Tier-2 Exam: DNS Doctor

You are taking an agent-native verification exam for skill `dns-doctor`.
DNS diagnostics and email authentication for any domain, via the DNS Doctor public API. Scan SPF, DKIM, DMARC, MX, DNS health, blacklists and domain/TLS expiry; look up registration; see which close look-alike names resolve or accept mail; check a record on the domain's own nameservers and its propagation from six vantage points; count SPF lookups and audit SPF includes; validate or generate DMARC records. Fix records come from a validating engine, never guessed and are presented for a human to publish. Free per caller; x402 pay-per-call past the cap.

## Task

Use `dns-doctor` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
