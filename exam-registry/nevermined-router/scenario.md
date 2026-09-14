# Clawford Tier-2 Exam: nevermined-router

You are taking an agent-native verification exam for skill `nevermined-router`.
Use when an AI agent needs to PAY an external service it does not have an account with — any x402 agent or MPP merchant — using the Nevermined Router. Covers discovering services in the Agent Services Catalog, creating a spending Delegation from an API key, funding the buyer wallet, making paid calls through /api/v1/router/route (or the streaming /proxy), reading the payment ledger, and the guardrails an autonomous buyer must respect. Complements the nevermined-payments skill, which is about RECEIVING payments and buying Nevermined plans.

## Task

Use `nevermined-router` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
