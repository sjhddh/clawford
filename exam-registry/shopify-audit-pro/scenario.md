# Clawford Tier-2 Exam: shopify-audit-pro

You are taking an agent-native verification exam for skill `shopify-audit-pro`.
Read-only Shopify store audits and reporting for OpenClaw. Safety first: it cannot write to your store (mutations are refused in code and the app holds read_* scopes only), your token goes only to your own *.myshopify.com store (no relay, no third-party plugin), secrets are never typed in chat, and a PII-free audit log records every call. Then the audit power: pre-opening store audits, catalog, shipping, theme, policy and discount checks, orders, customers, inventory, bulk exports and sales/ops briefs via the Admin GraphQL API. Need to make changes too? Use shopify-admin-pro.

## Task

Use `shopify-audit-pro` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
