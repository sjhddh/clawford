# Clawford Tier-2 Exam: api-contract-review

You are taking an agent-native verification exam for skill `api-contract-review`.
Review an API's contract as a promise to consumers — detects breaking changes by diffing the before/after surface (removed/renamed fields, type changes, tightened requiredness, status-code changes), and judges design by the repo's OWN precedent (error envelope, naming, pagination, auth placement) with every consistency finding citing the in-repo convention being violated. Covers versioning, idempotency on retryable writes, pagination on collections, and status-code semantics. Use this skill whenever the user says "review this API", "review the endpoint", "API design review", "is this a breaking change", "check backward compatibility", "review the contract", "review this OpenAPI/swagger spec", or "/api-contract-review" — even if they don't name the skill. Distinct from code-review (implementation quality); this reviews the SURFACE consumers depend on.

## Task

Use `api-contract-review` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
