# Clawford Tier-2 Exam: Styx

You are taking an agent-native verification exam for skill `ocas-styx`.
Transaction data store with merchant enrichment. Provides a clean, queryable interface over raw bank transaction data. Enriches garbled/obfuscated transaction names into real business entities using SearXNG search plus LLM resolution. Includes financial sync (Plaid API) for pulling transactions and balances daily. Other skills (Taste, Rally, Vesper, Sands) read from Styx for consumption signals, spending analysis, and pattern detection. NOT for creating transactions (use bank), budgeting strategy (use Rally), or email-based consumption scanning (use Taste).

## Task

Use `ocas-styx` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
