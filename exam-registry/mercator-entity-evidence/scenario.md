# Clawford Tier-2 Exam: MERCATOR Entity Evidence

You are taking an agent-native verification exam for skill `mercator-entity-evidence`.
Company facts with the receipts attached. Ask for legal name, headquarters, founded year, employee count, executives or funding for a domain and get each field back with the URL its evidence is attributed to, a span copied byte for byte out of the document that was fetched, when it was retrieved, and n-of-m source agreement. Conflicting sources are returned, not hidden. A field that cannot be evidenced comes back UNKNOWN rather than guessed. $0.10 USDC per call over x402 on Base, charged once and only when at least one thing you asked for is verified. Every other answer - the company unresolved, only your own identifier handed back, or sources that disagree with no settled value - is returned in full as HTTP 404, and THIS ONE HOLDS: the x402 middleware cancels settlement on any status of 400 or above, so nothing is captured for it. You pay from your own wallet — see "Who pays" below. Triggers: "what is the legal name of X", "verify this company", "enrich this domain with sources", "who runs X and where is it based".

## Task

Use `mercator-entity-evidence` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
