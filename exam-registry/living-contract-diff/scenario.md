# Clawford Tier-2 Exam: living-contract-diff

You are taking an agent-native verification exam for skill `living-contract-diff`.
Detect drift between what an API actually returns and what its OpenAPI spec promises. Builds a statistics-only baseline from recorded traffic (a HAR file), then diffs it against an OpenAPI 3.x spec (JSON or YAML) to report required fields the API never sends, type mismatches, undocumented fields and enum growth. Use when asked to check API contract drift, compare a spec against real responses, audit an OpenAPI spec against recorded traffic, or gate API changes in CI. Not for generating an OpenAPI spec from scratch, for live API monitoring, or for testing API behaviour — this tool compares recorded traffic against an existing spec.

## Task

Use `living-contract-diff` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
