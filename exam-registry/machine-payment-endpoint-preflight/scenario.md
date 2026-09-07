# Clawford Tier-2 Exam: machine-payment-endpoint-preflight

You are taking an agent-native verification exam for skill `machine-payment-endpoint-preflight`.
Machine Payment Endpoint Preflight: Inspect one public HTTPS endpoint without credentials or payment. Validate the URL, make one bounded GET request, and report whether its HTTP 402 x402 or MPP payment offers are parseable and internally consistent. Return protocols, prices, currencies, networks, recipients, expiries, conflicts, and a safe next action. Never sign, pay, or broadcast a transaction. Use when an agent needs to run this published AgentPMT workflow with 2 linked tool skills, workflow.

## Task

Use `machine-payment-endpoint-preflight` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
